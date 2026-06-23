export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const phone = body.phone

	if (!phone) {
		throw createError({
			statusCode: 400,
			statusMessage: "not found phone"
		})
	}

	const token = process.env.BOT_TOKEN
	const chatId = process.env.CHAT_ID

	if (!token || !phone) {
		throw createError({
			statusCode: 400,
			statusMessage: "not found token or phone"
		})
	}

	const messages = `Заявка на звонок с сайта: ${phone}`

	const response = await fetch(`https://platform-api.max.ru/messages?chat_id=${chatId}`, {
		method: 'POST',
		headers: {
			Authorization: token,
			ContentType: 'application/json'
		},
		body: JSON.stringify({
			text: messages,
			notify: true,
		})
	})

	if (!response.ok) {
		const error = response.text

		throw createError({
			statusCode: response.status,
			statusMessage: await response.text()
		})
	}

	return {
		ok: true
	}
})
