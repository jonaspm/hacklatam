# Trigger Patterns

Triggers are event-driven automations that fire when entities change or on a cron schedule. They execute a sequence of actions, optionally chaining outputs between steps.

## Entity Event Trigger

Fires when an entity is created, updated, or deleted. Use an optional `condition` to filter to specific state changes.

```typescript
import { defineTrigger } from 'struere'

export default defineTrigger({
  name: 'Payment Confirmed',
  slug: 'payment-confirmed',
  on: {
    entityType: 'booking',
    action: 'updated',
    condition: { field: 'status', operator: 'eq', value: 'paid' },
  },
  actions: [
    {
      tool: 'whatsapp.sendTemplate',
      as: 'confirmation',
      args: {
        templateName: 'booking_confirmed',
        phoneNumber: '{{trigger.data.clientPhone}}',
        variables: ['{{trigger.data.clientName}}', '{{trigger.data.date}}'],
      },
    },
  ],
})
```

## Schedule Trigger (Cron)

Fires on a cron schedule. Use standard 5-field cron syntax with a timezone.

```typescript
import { defineTrigger } from 'struere'

export default defineTrigger({
  name: 'Daily Report',
  slug: 'daily-report',
  on: {
    schedule: '0 8 * * 1-5',
    timezone: 'America/New_York',
  },
  actions: [
    {
      tool: 'agent.chat',
      as: 'report',
      args: {
        agentSlug: 'report-generator',
        message: 'Generate the daily report for today',
      },
    },
  ],
})
```

## Chained Actions with Step References

Name action steps with `as`, then reference their output in later steps via `{{steps.<name>}}`.

```typescript
import { defineTrigger } from 'struere'

export default defineTrigger({
  name: 'New Client Onboarding',
  slug: 'new-client-onboarding',
  on: {
    entityType: 'client',
    action: 'created',
  },
  actions: [
    {
      tool: 'agent.chat',
      as: 'welcome',
      args: {
        agentSlug: 'onboarding-agent',
        message: 'New client: {{trigger.data.name}}, email: {{trigger.data.email}}. Send welcome sequence.',
      },
    },
    {
      tool: 'email.send',
      args: {
        to: '{{trigger.data.email}}',
        subject: 'Welcome to {{organizationName}}',
        html: '{{steps.welcome.response}}',
      },
    },
  ],
})
```

## Delayed Execution

```typescript
import { defineTrigger } from 'struere'

export default defineTrigger({
  name: 'Payment Reminder',
  slug: 'payment-reminder',
  on: {
    entityType: 'booking',
    action: 'created',
  },
  schedule: {
    delay: 86400000,
    cancelPrevious: true,
  },
  retry: {
    maxAttempts: 3,
    backoffMs: 5000,
  },
  actions: [
    {
      tool: 'whatsapp.sendTemplate',
      args: {
        templateName: 'payment_reminder',
        phoneNumber: '{{trigger.data.clientPhone}}',
      },
    },
  ],
})
```

## Key Patterns

**Entity triggers: entityType + action + optional condition.** The `action` field accepts `created`, `updated`, or `deleted`. The `condition` field is optional and filters to specific field values. Without a condition, the trigger fires on every update to that entity type.

**Schedule triggers: 5-field cron + timezone.** Always specify a timezone to avoid ambiguity. `0 8 * * 1-5` means 8:00 AM Monday through Friday. The cron runs in the specified timezone regardless of server location.

**Chain actions with `as` to name steps, reference with `{{steps.<name>}}`.**  The `as` field gives a step a name. Later actions can reference the output of named steps using `{{steps.<name>.response}}`. This lets you pipe an agent's output into an email body, a Slack message, or another agent call.

**agent.chat in triggers for intelligent processing.** When a trigger needs to do more than simple data mapping — generating personalized content, making decisions, formatting complex output — delegate to an agent via `agent.chat`. The agent handles the intelligence, the trigger handles the plumbing.

**`schedule: { delay }` for deferred execution, `schedule: { at, offset }` for time-based.**

**`retry: { maxAttempts, backoffMs }` for automatic retries on failure.**

**`cascade: true` required on entity mutations within trigger actions.**

**`{{trigger.previousData.FIELD}}` available in update triggers for transition detection.**

**Manual trigger testing: `struere triggers fire <slug> --env development`.**

**Debugging triggers.** Use the CLI to inspect trigger execution:
- `struere triggers logs <slug>` lists recent events for a trigger
- `struere triggers log <event-id> --verbose` shows the full execution trace including each action's input and output
