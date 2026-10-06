# Niazi MD — Central Pairing Site

Central multi-server pairing dashboard for the Syed zada X niazi MD bot.

## Features
- Server selector with live `/api/health` checks.
- Phone-number pairing through the selected server.
- MongoDB-backed server registry.
- Server API keys remain server-side.
- Registration endpoint protected by `REGISTRATION_SECRET`.

## Environment
Set `MONGODB_URL`, `DB_NAME`, and `REGISTRATION_SECRET`. `SERVERS_JSON` can be used as a simple fallback registry.

## Server contract
Each bot server should expose `GET /api/health` and `POST /api/pair` accepting `{ "phone": "923..." }` with an `X-API-KEY` header. Register it through `POST /api/register` with `X-Registration-Secret` and `id`, `name`, `url`, `apiKey`, `maxSessions`.

The old bot configuration already contains `CENTRAL_PAIRING_URL`, `CENTRAL_REGISTRATION_SECRET`, `SERVER_PUBLIC_URL`, `SERVER_API_KEY`, `SERVER_ID`, `SERVER_NAME`, and `MAX_SESSIONS`.