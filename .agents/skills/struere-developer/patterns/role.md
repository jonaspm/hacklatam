# Role Patterns

## Slug as identity, name as label

A role's `slug` is its identity. It is what agents reference in `defineAgent({ roles: [...] })`, what scope rules match against, and what the dashboard ACL uses for `agentAccess`. The `name` field is purely the human-readable label shown in the dashboard.

```typescript
import { defineRole } from 'struere'

export const coach = defineRole({
  slug: 'coach',
  name: 'Coach',
  policies: [
    { resource: 'player', actions: ['read', 'update'], effect: 'allow' },
  ],
  scopeRules: [
    { entityType: 'player', field: 'data.teamId', operator: 'eq', value: 'team-A' },
  ],
})
```

When `slug` is omitted, it is derived from `name` (lowercased, non-alphanumeric replaced with hyphens). Existing roles without `slug` continue to work, but new roles should declare it explicitly — `slug` will be required in a future major version.

## Key Patterns

- Always set `slug` on new roles. Treat `name` as the display label only.
- The agent-side reference is the slug: `defineAgent({ roles: ['coach'] })`.
- Renaming a slug creates a new role — it does not rename the existing one.
- See [agent-complex.md](agent-complex.md) for per-agent permission patterns and [platform-gotchas.md](../platform-gotchas.md) gotcha 34.
