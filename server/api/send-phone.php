<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS_BY_IP = 5;
const BAN_MS = 24 * 60 * 60 * 1000;
const PHONE_COOLDOWN_MS = 60 * 60 * 1000;

// Тестовые секреты
const MAX_TOKEN = 'f9LHodD0cOL2gsx06-HOtBBJM4CgWAxnD02FLfu5bHGKcqDO15ht7_iYG8_YIn9E3huNkzUaP4uIATUXOz28';
const MAX_CHAT_ID = '-76163809129908';

// Файл, где PHP будет хранить попытки по IP и телефону
const STORAGE_DIR = __DIR__ . '/storage';
const STATE_FILE = STORAGE_DIR . '/state.json';

function nowMs(): int
{
    return (int) floor(microtime(true) * 1000);
}

function jsonResponse(int $statusCode, array $data): void
{
    http_response_code($statusCode);

    echo json_encode($data, JSON_UNESCAPED_UNICODE);

    exit;
}

function okResponse(): void
{
    jsonResponse(200, [
        'ok' => true,
    ]);
}

function errorResponse(int $statusCode, string $message): void
{
    jsonResponse($statusCode, [
        'ok' => false,
        'message' => $message,
    ]);
}

function getClientIp(): string
{
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $ip = trim($parts[0]);

        if ($ip !== '') {
            return $ip;
        }
    }

    if (!empty($_SERVER['HTTP_X_REAL_IP'])) {
        return trim($_SERVER['HTTP_X_REAL_IP']);
    }

    if (!empty($_SERVER['REMOTE_ADDR'])) {
        return trim($_SERVER['REMOTE_ADDR']);
    }

    return 'unknown';
}

function defaultState(): array
{
    return [
        'ipAttempts' => [],
        'bannedIps' => [],
        'phoneAttempts' => [],
    ];
}

function ensureStorageExists(): void
{
    if (!is_dir(STORAGE_DIR)) {
        mkdir(STORAGE_DIR, 0755, true);
    }

    $htaccessFile = STORAGE_DIR . '/.htaccess';

    if (!file_exists($htaccessFile)) {
        file_put_contents($htaccessFile, "Deny from all\n");
    }

    if (!file_exists(STATE_FILE)) {
        file_put_contents(
            STATE_FILE,
            json_encode(defaultState(), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
        );
    }
}

function withState(callable $callback)
{
    ensureStorageExists();

    $file = fopen(STATE_FILE, 'c+');

    if ($file === false) {
        errorResponse(500, 'cannot open state file');
    }

    if (!flock($file, LOCK_EX)) {
        fclose($file);
        errorResponse(500, 'cannot lock state file');
    }

    rewind($file);

    $content = stream_get_contents($file);
    $state = json_decode($content ?: '', true);

    if (!is_array($state)) {
        $state = defaultState();
    }

    if (!isset($state['ipAttempts']) || !is_array($state['ipAttempts'])) {
        $state['ipAttempts'] = [];
    }

    if (!isset($state['bannedIps']) || !is_array($state['bannedIps'])) {
        $state['bannedIps'] = [];
    }

    if (!isset($state['phoneAttempts']) || !is_array($state['phoneAttempts'])) {
        $state['phoneAttempts'] = [];
    }

    $result = $callback($state);

    rewind($file);
    ftruncate($file, 0);

    fwrite(
        $file,
        json_encode($state, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
    );

    fflush($file);
    flock($file, LOCK_UN);
    fclose($file);

    return $result;
}

function checkIpSpam(): array
{
    return withState(function (array &$state): array {
        $ip = getClientIp();
        $now = nowMs();

        $bannedUntil = $state['bannedIps'][$ip] ?? null;

        if ($bannedUntil !== null) {
            if ((int) $bannedUntil > $now) {
                return [
                    'allowed' => false,
                    'ip' => $ip,
                    'reason' => 'ip_banned',
                ];
            }

            unset($state['bannedIps'][$ip]);
        }

        $attempt = $state['ipAttempts'][$ip] ?? null;

        if (
            !is_array($attempt) ||
            !isset($attempt['count'], $attempt['firstAttemptAt']) ||
            $now - (int) $attempt['firstAttemptAt'] > WINDOW_MS
        ) {
            $state['ipAttempts'][$ip] = [
                'count' => 1,
                'firstAttemptAt' => $now,
            ];

            return [
                'allowed' => true,
                'ip' => $ip,
            ];
        }

        $nextCount = (int) $attempt['count'] + 1;

        if ($nextCount > MAX_ATTEMPTS_BY_IP) {
            $state['bannedIps'][$ip] = $now + BAN_MS;
            unset($state['ipAttempts'][$ip]);

            return [
                'allowed' => false,
                'ip' => $ip,
                'reason' => 'too_many_requests',
            ];
        }

        $state['ipAttempts'][$ip] = [
            'count' => $nextCount,
            'firstAttemptAt' => (int) $attempt['firstAttemptAt'],
        ];

        return [
            'allowed' => true,
            'ip' => $ip,
        ];
    });
}

function normalizePhone($value): string
{
    return trim((string) ($value ?? ''));
}

function checkPhoneCooldown(string $phone): array
{
    return withState(function (array &$state) use ($phone): array {
        $now = nowMs();

        $lastAttemptAt = $state['phoneAttempts'][$phone] ?? null;

        if ($lastAttemptAt !== null && $now - (int) $lastAttemptAt < PHONE_COOLDOWN_MS) {
            return [
                'allowed' => false,
                'reason' => 'phone_cooldown',
            ];
        }

        $state['phoneAttempts'][$phone] = $now;

        return [
            'allowed' => true,
        ];
    });
}

function readJsonBody(): array
{
    $rawBody = file_get_contents('php://input');

    if ($rawBody === false || trim($rawBody) === '') {
        return [];
    }

    $data = json_decode($rawBody, true);

    if (!is_array($data)) {
        errorResponse(400, 'invalid json');
    }

    return $data;
}

function sendCallRequestToMax(string $phone): void
{
    $token = MAX_TOKEN;
    $chatId = MAX_CHAT_ID;

    if ($token === '' || $chatId === '') {
        errorResponse(500, 'not found token or chat id');
    }

    $message = 'Заявка на звонок с сайта: ' . $phone;

    $url = 'https://platform-api.max.ru/messages?chat_id=' . urlencode($chatId);

    $payload = json_encode([
        'text' => $message,
        'notify' => true,
    ], JSON_UNESCAPED_UNICODE);

    if ($payload === false) {
        errorResponse(500, 'cannot encode payload');
    }

    $ch = curl_init($url);

    if ($ch === false) {
        errorResponse(500, 'cannot init curl');
    }

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: ' . $token,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_TIMEOUT => 15,
    ]);

    $responseBody = curl_exec($ch);
    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);

    curl_close($ch);

    if ($responseBody === false) {
        errorResponse(500, 'MAX API curl error: ' . $curlError);
    }

    if ($statusCode < 200 || $statusCode >= 300) {
        errorResponse(
            $statusCode > 0 ? $statusCode : 500,
            $responseBody !== '' ? $responseBody : 'MAX API error'
        );
    }
}

// Для проверки в браузере.
// Если открыть /api/send-phone.php обычным GET-запросом,
// будет понятный ответ, что файл существует.
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    jsonResponse(405, [
        'ok' => false,
        'message' => 'method not allowed, use POST',
    ]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    errorResponse(405, 'method not allowed');
}

$ipCheck = checkIpSpam();

if (!$ipCheck['allowed']) {
    error_log('[spam] blocked ip=' . $ipCheck['ip'] . ', reason=' . $ipCheck['reason']);

    okResponse();
}

$body = readJsonBody();

$phone = normalizePhone($body['phone'] ?? '');

if ($phone === '') {
    errorResponse(400, 'not found phone');
}

$phoneCheck = checkPhoneCooldown($phone);

if (!$phoneCheck['allowed']) {
    error_log('[spam] blocked phone=' . $phone . ', reason=' . $phoneCheck['reason']);

    okResponse();
}

sendCallRequestToMax($phone);

okResponse();