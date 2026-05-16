# Router Patterns

## Rules-Based Router

```typescript
import { defineRouter } from 'struere'

export default defineRouter({
  name: 'Support Router',
  slug: 'support-router',
  mode: 'rules',
  agents: [
    { slug: 'billing-agent', description: 'Handles invoices, payments, billing' },
    { slug: 'tech-support', description: 'Handles bugs, errors, technical issues' },
    { slug: 'general-agent', description: 'General customer support' },
  ],
  rules: [
    {
      conditions: [
        { field: 'message.text', operator: 'contains', value: 'invoice' },
      ],
      route: 'billing-agent',
    },
    {
      conditions: [
        { field: 'message.text', operator: 'contains', value: 'bug' },
      ],
      route: 'tech-support',
    },
  ],
  fallback: 'general-agent',
})
```

## LLM Classify Router

```typescript
import { defineRouter } from 'struere'

export default defineRouter({
  name: 'Smart Router',
  slug: 'smart-router',
  mode: 'classify',
  classifyModel: { model: 'openai/gpt-5-mini', temperature: 0 },
  agents: [
    { slug: 'sales-agent', description: 'Handles pricing questions, demos, and purchase inquiries' },
    { slug: 'support-agent', description: 'Handles account issues, bugs, and technical help' },
    { slug: 'billing-agent', description: 'Handles invoices, refunds, and payment methods' },
  ],
  fallback: 'support-agent',
})
```

## Voice Router with Auditor

```typescript
import { defineRouter } from 'struere'

export default defineRouter({
  name: 'Daily Check-in',
  slug: 'daily-checkin',
  mode: 'rules',
  agents: [
    { slug: 'voice-agent', description: 'Handles voice calls' },
    { slug: 'call-auditor', description: 'Validates and stores data in background' },
  ],
  rules: [
    { conditions: [{ field: 'channel', operator: 'eq', value: 'voice' }], route: 'voice-agent' },
  ],
  fallback: 'voice-agent',
  voiceConfig: {
    provider: 'openai-realtime',
    model: 'gpt-realtime-mini',
    voice: 'shimmer',
    auditorAgent: 'call-auditor',
    turnDetection: { type: 'semantic_vad', eagerness: 'medium' },
    noiseReduction: 'near_field',
    pollInterval: 5000,
  },
})
```

## Key Patterns

- **Rules mode**: zero LLM cost, conditions evaluated top-to-bottom, first match wins
- **Classify mode**: LLM picks best agent based on descriptions — use temperature 0
- **Voice routers** need `voiceConfig` with `auditorAgent` for background data validation
- **Available rule fields**: `phoneNumber`, `channel`, `message.text`, `message.type`, `{entityType}.*`, `time.hour`, `time.dayOfWeek`
- **Available operators**: `eq`, `neq`, `in`, `contains`, `regex`, `gt`, `lt`, `exists`
- **Sticky routing**: once assigned, user stays with same agent until `router.transfer`
- **Voice options**: `alloy`, `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, `verse`, `marin`, `cedar`
- **Voice models**: `gpt-realtime-mini` (cost-efficient), `gpt-realtime-1.5` (best quality)
- **Turn detection**: `semantic_vad` (recommended), `server_vad` (silence-based)
