# Decision Frameworks

---

## Choosing a Model

| Need | Model |
|------|-------|
| Cost-sensitive / high-volume | `openai/gpt-5-mini` or `openai/gpt-5-nano` |
| Balanced reasoning | `anthropic/claude-sonnet-4` or `openai/gpt-5` |
| Complex reasoning | `anthropic/claude-opus-4-6` or `openai/o3` |
| Fast + cheap | `xai/grok-4-1-fast` or `google/gemini-2.5-flash` |

For extended thinking models (o3, claude-opus), you can enable reasoning: `reasoning: { enabled: true, effort: 'medium' }`.

Fetch https://docs.struere.dev/reference/model-configuration.md for full pricing and options.

## Built-in vs Custom Tools

**Use built-in tools when:**
- Simple CRUD on entities (entity.create, entity.query, etc.)
- Sending messages (whatsapp.send, email.send)
- Calendar or payment operations

**Use custom tools when:**
- Multi-step workflows (create + notify + update in one call)
- External API calls (custom tool fetch is unrestricted)
- Web scraping (use struere.web.fetch for markdown conversion)
- Data transformation or computation
- Reducing tool count by consolidating operations

**Use `templateOnly: true` when:**
- Dynamic data needed in system prompt without runtime tool call
- Computed context at prompt compile time
- Available to ALL agents' prompts automatically (no need to list in tools array)

## Routers vs agent.chat

**Use routers when:**
- Shared entry point (WhatsApp, widget) serving multiple agents
- Zero-LLM-cost routing via deterministic rules
- Sticky sessions needed
- Automatic handoffs between agents

**Use agent.chat when:**
- Agent delegates a subtask and needs the response inline
- Real-time orchestration within a single turn
- Calling agent must process the response

## Structuring Multi-Agent Systems

- Split by **audience** (customer, admin), not function (booking, notification)
- **Routers** for entry-point routing with shared channels
- **Triggers** for decoupled async communication (retried, tracked)
- **agent.chat** for real-time delegation
- Each agent: own system prompt, tools, and permission scope
- Max depth 3 in agent graph

## Thread Context Access

**In system prompts:**

| Variable | Description |
|----------|-------------|
| `{{threadContext.channel}}` | whatsapp, api, widget, dashboard, voice |
| `{{threadContext.params.phoneNumber}}` | Sender's phone |
| `{{threadContext.params.contactName}}` | Sender's WhatsApp name |

**In custom tool handlers (context parameter):**

| Property | Description |
|----------|-------------|
| `context.organizationId` | Current organization |
| `context.actorId` | ID of the acting user/agent |
| `context.actorType` | `"user"` \| `"agent"` \| `"system"` |
| `context.conversationId` | Current conversation (optional) |
| `context.userId` | Current user ID (optional) |

## System Prompt Priority Structure

| Priority | Section | Purpose |
|----------|---------|---------|
| P0 | Security | Never-do rules, boundaries |
| P1 | Data | Injected live data via template variables |
| P2 | Intent detection | What to do for different requests |
| P3+ | Flows | Multi-turn conversation patterns |
| Last | Style | Tone, message length, personality |

Always include `{{currentTime}}` and `{{organizationName}}`.
