# Entity Type Patterns

## Basic Entity with Status Enum

```typescript
import { defineData } from 'struere'

export default defineData({
  name: 'Booking',
  slug: 'booking',
  schema: {
    type: 'object',
    properties: {
      clientName: { type: 'string' },
      clientEmail: { type: 'string' },
      clientPhone: { type: 'string' },
      service: { type: 'string' },
      date: { type: 'string' },
      time: { type: 'number' },
      status: { type: 'string', enum: ['pending', 'confirmed', 'paid', 'completed', 'cancelled'], default: 'pending' },
      notes: { type: 'string' },
      amount: { type: 'number' },
      providerId: { type: 'string' },
    },
    required: ['clientName', 'clientEmail', 'clientPhone', 'service', 'date', 'time'],
  },
  searchFields: ['clientName', 'clientEmail', 'service'],
})
```

## Entity with Relationships

```typescript
import { defineData } from 'struere'

export default defineData({
  name: 'Work Log',
  slug: 'work-log',
  schema: {
    type: 'object',
    properties: {
      staffId: { type: 'string' },
      clientId: { type: 'string' },
      siteId: { type: 'string' },
      workDescription: { type: 'string' },
      materials: { type: 'array', items: { type: 'object', properties: { item: { type: 'string' }, quantity: { type: 'number' }, unit: { type: 'string' } } } },
      comments: { type: 'string' },
      managerNotes: { type: 'string' },
      date: { type: 'string' },
    },
    required: ['staffId', 'clientId', 'workDescription', 'date'],
  },
  searchFields: ['workDescription'],
})
```

## User Profile Entity (for personalization)

```typescript
import { defineData } from 'struere'

export default defineData({
  name: 'User Profile',
  slug: 'user-profile',
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
      preferredTopics: { type: 'array', items: { type: 'string' } },
      notificationFrequency: { type: 'string', enum: ['daily', 'weekly', 'monthly'] },
      timezone: { type: 'string', default: 'UTC' },
    },
    required: ['name', 'email'],
  },
  searchFields: ['name', 'email'],
})
```

## Key Patterns

- Status enums for workflow tracking
- Store related entity IDs as strings (e.g., `providerId`, `clientId`)
- Use `searchFields` for fields the agent will query frequently
- Array fields for structured lists (materials, topics)
- Default values for common fields

## Querying entities — filter field syntax

When querying via the Data API, `entity.query`, or the JS client, filter fields fall into two buckets:

- **Top-level fields** — only indexed columns are accepted. Filtering on a non-indexed top-level field returns `400 Bad Request` listing what IS queryable.
- **JSON payload fields** — everything declared in `schema.properties` lives in the `data` blob. Reference these as `data.<fieldName>`:

```typescript
await struere.data.query('booking', {
  filters: {
    'data.status': 'pending',
    'data.providerId': 'usr_123',
  },
})
```

Top-level `status` is the entity lifecycle column (`active`, `archived`, `deleted`) and is **rejected** as a filter — always use `data.status` for your domain status. See [platform-gotchas.md](../platform-gotchas.md) gotcha 33.
