# Custom Tool Patterns

Three patterns for building custom tools in Struere: handler tools for multi-step workflows, template-only tools for prompt data injection, and external API tools for third-party integrations.

## Handler Tool (Multi-Step Workflow)

Consolidate related operations into a single tool with an `action` parameter. This keeps the agent's tool count low while supporting complex workflows.

```typescript
import { defineTools } from 'struere'

export default defineTools([
  {
    name: 'manage_booking',
    description: 'Manage bookings: schedule, reschedule, or cancel',
    parameters: {
      type: 'object',
      properties: {
        action: { type: 'string', enum: ['schedule', 'reschedule', 'cancel'], description: 'Action to perform' },
        serviceType: { type: 'string', description: 'Service type' },
        date: { type: 'string', description: 'ISO date' },
        bookingId: { type: 'string', description: 'Required for reschedule/cancel' },
        clientName: { type: 'string', description: 'Required for schedule' },
        clientEmail: { type: 'string', description: 'Required for schedule' },
      },
      required: ['action'],
    },
    handler: async (args, context, struere, fetch) => {
      if (args.action === 'schedule') {
        const clients = await struere.entity.query({ type: 'client', filters: { email: args.clientEmail } })
        const booking = await struere.entity.create({ type: 'booking', data: { clientId: clients[0]?.id, service: args.serviceType, date: args.date, status: 'confirmed' } })
        return { success: true, bookingId: booking.id, message: `Booked ${args.serviceType} on ${args.date}` }
      }
      if (args.action === 'reschedule') {
        await struere.entity.update({ id: args.bookingId, data: { date: args.date } })
        return { success: true, message: `Rescheduled to ${args.date}` }
      }
      if (args.action === 'cancel') {
        await struere.entity.update({ id: args.bookingId, data: { status: 'cancelled' } })
        return { success: true, message: 'Booking cancelled' }
      }
    },
  },
])
```

## Template-Only Tool (Prompt Data Injection)

A tool that injects live data into the system prompt at compile time. The agent never "calls" this tool — its output is embedded in the prompt before the conversation starts.

```typescript
import { defineTools } from 'struere'

export default defineTools([
  {
    name: 'format_available_slots',
    description: 'Shows available time slots for booking',
    parameters: {
      type: 'object',
      properties: {
        serviceType: { type: 'string', description: 'Filter by service type' },
      },
    },
    templateOnly: true,
    handler: async (args, context, struere) => {
      const providers = await struere.entity.query({ type: 'provider' })
      const bookings = await struere.entity.query({ type: 'booking', filters: { status: 'confirmed' } })
      
      let output = '## Available Slots\n'
      for (const provider of providers) {
        const availability = provider.data.availability || []
        const booked = bookings.filter(b => b.data.providerId === provider.id)
        const freeSlots = availability.filter(slot => !booked.some(b => b.data.date === slot.date && b.data.hour === slot.hour))
        output += `**${provider.data.name}** [id:${provider.id}]\n`
        freeSlots.forEach(s => { output += `- ${s.date} at ${s.hour}:00\n` })
      }
      return output
    },
  },
])
```

## External API Tool

A tool that calls an external API using the unrestricted `fetch` parameter (4th argument in the handler).

```typescript
import { defineTools } from 'struere'

export default defineTools([
  {
    name: 'send_slack_message',
    description: 'Send a notification to Slack',
    parameters: {
      type: 'object',
      properties: {
        channel: { type: 'string', description: 'Slack channel ID' },
        text: { type: 'string', description: 'Message text' },
      },
      required: ['channel', 'text'],
    },
    handler: async (args, context, struere, fetch) => {
      const response = await fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.SLACK_TOKEN}` },
        body: JSON.stringify({ channel: args.channel, text: args.text }),
      })
      const data = await response.json()
      return { success: data.ok, error: data.error }
    },
  },
])
```

## Key Patterns

**Consolidate related operations with `action` enum.** Instead of three tools (`create_booking`, `update_booking`, `cancel_booking`), use one tool with an `action` parameter. This keeps the agent's tool count under 5 and reduces the chance of the model picking the wrong tool.

**templateOnly tools don't count toward the 5-tool limit.** They execute at prompt compile time, not during conversation. Use them to inject live data (availability, schedules, user context) directly into the system prompt so the agent can reason over it without making tool calls.

**Always include `[id:xxx]` next to entity names in template output.** When `format_available_slots` outputs `**Dr. Smith** [id:abc123]`, the agent can reference the correct ID when calling booking tools. Without this, the model will hallucinate IDs. This is the single most important pattern for preventing entity reference errors.

**Handler signature is `(args, context, struere, fetch)`.** The `context` parameter provides `context.organizationId`, `context.actorId`, `context.actorType` (user/agent/system), and optionally `context.conversationId` and `context.userId`. The `struere` parameter is the SDK with `struere.entity.*`, `struere.web.fetch()`, etc. The `fetch` parameter is unrestricted HTTP — can reach any external domain.

**3rd parameter (`struere`) gives access to `struere.web.fetch`.** This is useful for fetching web pages and converting them to markdown for the agent to process. Different from the 4th parameter `fetch` which is raw HTTP.
