# Calling Struere from an External App

Use the `struere/client` SDK to call a Struere agent from an external application — a browser SPA, a mobile app, or your own server. CORS is enabled on the public chat and data endpoints, so browsers can call directly without a backend-for-frontend (BFF) layer.

## When to Use This Pattern

- **External app (web/mobile/server) calling Struere** — your app already exists and you want to add an agent or read entity data. Use this pattern.
- **Embeddable chat widget** — drop-in chat UI on a marketing site. Use the widget instead: https://docs.struere.dev/integrations/embeddable-widget.md
- **Logic running inside an agent's turn** — extending what the agent itself can do (database lookups, external API calls). Use custom tools instead, see [custom-tools.md](custom-tools.md).

## Step 1: Get an API Key

API keys are environment-scoped. Create one per environment.

```bash
struere keys create --name "my-spa-dev" --env development
```

The plaintext key is shown once. Save it immediately — it cannot be retrieved later.

For production, use `--env production` and store the key in your server's secret manager. Never check keys into git.

```bash
struere keys list
struere keys revoke <key-id>
```

## Step 2: Install the Client

```bash
bun add struere
```

```typescript
import { StruereClient } from 'struere/client'

const struere = new StruereClient({
  apiKey: process.env.STRUERE_API_KEY!,
})
```

## Step 3: Call from Your App

```typescript
import { StruereClient, StruereApiError } from 'struere/client'

const struere = new StruereClient({ apiKey: process.env.STRUERE_API_KEY! })

const reply = await struere.chat({
  agent: 'support-bot',
  message: 'I need help resetting my password',
  threadId: existingThreadId,
})

console.log(reply.message, reply.threadId)
```

Read entity data:

```typescript
const tickets = await struere.data.list('ticket', {
  filters: { status: 'open' },
  limit: 20,
})
```

Routers work the same way — pass the router slug as `router` instead of `agent`:

```typescript
await struere.chat({ router: 'inbound', message: 'hi' })
```

## Browser Apps

CORS is enabled on:

- `POST /v1/chat`
- `POST /v1/agents/{slug}/chat`
- `POST /v1/routers/{slug}/chat`
- `GET /v1/entity-types`
- `GET|POST|PATCH|DELETE /v1/data/*`

A Vite/Next.js SPA can `import { StruereClient } from 'struere/client'` and call directly — no proxy or BFF required.

**Never bundle a production API key into client-side code.** A `sk_live_*` key shipped to the browser is a credential leak. Two safe paths:

1. **Dev only in browser** — use a development-environment key for local testing. Dev keys can only read/write dev data.
2. **Production via thin BFF** — for production traffic, route through a single server endpoint that injects the key from a secret manager. The BFF can be 10 lines; you don't need to wrap every Struere method.

## Error Handling

```typescript
import { StruereClient, StruereApiError } from 'struere/client'

try {
  const reply = await struere.chat({ agent: 'support-bot', message: 'hi' })
} catch (err) {
  if (err instanceof StruereApiError) {
    console.error(err.status, err.code, err.message, err.requestId)
    if (err.status === 401) {
      // key revoked or wrong env
    }
    if (err.status === 429) {
      // rate-limited — back off
    }
  }
  throw err
}
```

`StruereApiError` exposes `status` (HTTP status), `message` (human string), `code` (machine-readable error code, e.g. `agent_not_found`), and `requestId` (include this when reporting issues).

## Anti-Patterns

**Don't hand-roll `fetch` calls.** The client handles auth headers, error parsing, request IDs, and the `_executionMeta` shape. Reimplementing it loses telemetry and breaks when endpoints evolve.

**Don't put `sk_live_*` keys in browser bundles.** Every browser-shipped key is exposed to every visitor. Use scoped dev keys for local testing, and a server-side BFF for production.

**Don't paginate by hand on the client.** `data.list` returns a `cursor` field — pass it back as `cursor` on the next call. Manual offset math drifts when entities are created concurrently.

**Don't share one key across multiple apps.** Create one key per app via `struere keys create --name "<app-name>"` so you can revoke a single integration without breaking the others.
