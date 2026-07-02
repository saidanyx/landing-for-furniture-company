import { readBody, createError, getRequestIP, type H3Event } from 'h3'

type AttemptInfo = {
  count: number
  firstAttemptAt: number
}

type IpCheckResult =
  | {
      allowed: true
      ip: string
    }
  | {
      allowed: false
      ip: string
      reason: 'ip_banned' | 'too_many_requests'
    }

type PhoneCheckResult =
  | {
      allowed: true
    }
  | {
      allowed: false
      reason: 'phone_cooldown'
    }

const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS_BY_IP = 5

const BAN_MS = 24 * 60 * 60 * 1000 

const PHONE_COOLDOWN_MS = 60 * 60 * 1000

const ipAttempts = new Map<string, AttemptInfo>()
const bannedIps = new Map<string, number>()
const phoneAttempts = new Map<string, number>()

function getClientIp(event: H3Event): string {
  return (
    getRequestIP(event, { xForwardedFor: true }) ||
    event.node.req.socket.remoteAddress ||
    'unknown'
  )
}

function checkIpSpam(event: H3Event): IpCheckResult {
  const ip = getClientIp(event)
  const now = Date.now()

  const bannedUntil = bannedIps.get(ip)

  if (bannedUntil) {
    if (bannedUntil > now) {
      return {
        allowed: false,
        ip,
        reason: 'ip_banned'
      }
    }

    bannedIps.delete(ip)
  }

  const attempt = ipAttempts.get(ip)

  if (!attempt || now - attempt.firstAttemptAt > WINDOW_MS) {
    ipAttempts.set(ip, {
      count: 1,
      firstAttemptAt: now
    })

    return {
      allowed: true,
      ip
    }
  }

  const nextCount = attempt.count + 1

  if (nextCount > MAX_ATTEMPTS_BY_IP) {
    bannedIps.set(ip, now + BAN_MS)
    ipAttempts.delete(ip)

    return {
      allowed: false,
      ip,
      reason: 'too_many_requests'
    }
  }

  ipAttempts.set(ip, {
    ...attempt,
    count: nextCount
  })

  return {
    allowed: true,
    ip
  }
}

function normalizePhone(value: unknown): string {
  return String(value || '').trim()
}

function checkPhoneCooldown(phone: string): PhoneCheckResult {
  const now = Date.now()

  const lastAttemptAt = phoneAttempts.get(phone)

  if (lastAttemptAt && now - lastAttemptAt < PHONE_COOLDOWN_MS) {
    return {
      allowed: false,
      reason: 'phone_cooldown'
    }
  }

  phoneAttempts.set(phone, now)

  return {
    allowed: true
  }
}

async function sendCallRequestToMax(phone: string) {
  const token = process.env.BOT_TOKEN
  const chatId = process.env.CHAT_ID

  if (!token || !chatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'not found token or chat id'
    })
  }

  const message = `Заявка на звонок с сайта: ${phone}`

  const response = await fetch(`https://platform-api.max.ru/messages?chat_id=${chatId}`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: message,
      notify: true
    })
  })

  if (!response.ok) {
    const errorText = await response.text()

    throw createError({
      statusCode: response.status,
      statusMessage: errorText || 'MAX API error'
    })
  }
}

function okResponse() {
  return {
    ok: true
  }
}

export default defineEventHandler(async (event) => {
  const ipCheck = checkIpSpam(event)

  if (!ipCheck.allowed) {
    console.warn(`[spam] blocked ip=${ipCheck.ip}, reason=${ipCheck.reason}`)

    return okResponse()
  }

  const body = await readBody(event)

  const phone = normalizePhone(body.phone)

  if (!phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'not found phone'
    })
  }

  const phoneCheck = checkPhoneCooldown(phone)

  if (!phoneCheck.allowed) {
    console.warn(`[spam] blocked phone=${phone}, reason=${phoneCheck.reason}`)

    return okResponse()
  }

  await sendCallRequestToMax(phone)

  return okResponse()
})