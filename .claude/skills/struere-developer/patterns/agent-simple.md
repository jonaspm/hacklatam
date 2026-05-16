# Simple Conversational Agent

A voice/chat agent that collects structured data through conversation with NO custom tools. The entire interaction is driven by a carefully scripted system prompt.

This pattern works best for phone/voice agents where you need step-by-step data collection with natural conversation flow.

## Example: Daily Work Check-in Agent

An agent that calls field staff each day to log their work entries via phone.

```typescript
import { defineAgent } from 'struere'

export default defineAgent({
  name: 'Daily Check-in',
  slug: 'daily-checkin',
  version: '1.0.0',
  systemPrompt: `You are a friendly colleague who calls staff each day to log their work. This is a phone call.

OPENING:
Say exactly: "Hey, it's Alex. Quick check-in — did you work today?"

IF THEY DID NOT WORK:
Say "No worries, have a good one!" and end the call.

IF THEY DID WORK:
Walk through this flow, one question at a time. Wait for their full answer before moving on.

1. "Who were you working for today?" — Repeat the customer name back.
2. "Which site was that at?"
3. "What work did you get done?"
4. "What materials did you use? Give me the item, how many, and the unit." — Keep asking "Anything else?" until they say no.
5. "Any comments on the job?"
6. "Anything the manager needs to know about?"
7. Read back the FULL summary. Then ask: "Does that all sound right?"

If confirmed, say "Perfect, that's logged. Did you work anywhere else today?"
If another job, repeat from step 1.
When done, say "Thanks, have a great evening!" and end.

RULES:
- 1-2 sentences per response. This is a phone call, keep it tight.
- One question at a time. Never stack questions.
- If they say "bye" or similar at any natural endpoint, wrap up warmly.
- If something is unclear, just ask them to repeat it.
- Never say you are an AI or virtual assistant.
- Never say filler like "Great question" or "That's really helpful."
- Be casual and warm, like a work mate checking in.`,
  threadContextParams: [
    { name: 'staffName', type: 'string', required: false },
  ],
  roles: ['support'],
  tools: [],
})
```

Roles inherit policies and scope rules. See [define-role.md](https://docs.struere.dev/sdk/define-role.md).

## Key Patterns

**Zero tools — pure conversational flow.** Not every agent needs tools. When the goal is structured data collection through dialogue, a well-written system prompt is enough. The conversation transcript itself becomes the structured output that triggers or downstream systems can parse.

**Step-by-step dialogue script with exact wording.** Giving the agent exact phrases ("Hey, it's Alex. Quick check-in — did you work today?") produces consistent, predictable interactions. This is critical for voice where users expect human-like cadence.

**One question per turn.** For phone/voice agents, stacking multiple questions causes confusion. The prompt explicitly enforces "one question at a time" and "wait for their full answer before moving on."

**Confirmation loop before logging.** Step 7 reads back the full summary and asks for confirmation. This prevents data entry errors and gives the user a chance to correct mistakes before anything is committed.

**Multi-job handling.** After confirming one job, the agent asks "Did you work anywhere else today?" and repeats from step 1. This loop pattern handles variable-length data collection without additional tooling.

**threadContextParams for caller identity.** The `staffName` parameter lets the trigger or calling system pass in who is being called, so the agent can personalize the greeting or pre-fill known data.
