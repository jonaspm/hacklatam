# Multi-Agent Orchestrator System

An orchestrator agent that delegates research to specialist agents, then compiles results. This pattern works for any workflow where different data sources or domains need independent processing before aggregation.

## Orchestrator Agent

The orchestrator is lean — it coordinates, compiles, and delivers. It does not do the research itself.

```typescript
import { defineAgent } from 'struere'

export default defineAgent({
  name: 'Report Generator',
  slug: 'report-generator',
  version: '1.0.0',
  model: { model: 'anthropic/claude-sonnet-4' },
  systemPrompt: `You generate personalized reports by delegating research to specialist agents.

WORKFLOW:
1. Query the user-profile entity to get the user's topics and preferences
2. For each topic, delegate to the appropriate specialist agent via agent.chat:
   - "source-a-analyst" for government publications
   - "source-b-analyst" for regulatory updates  
   - "source-c-analyst" for industry news
3. Compile all responses into a single HTML report
4. Send via email.send

RULES:
- Always query user preferences first
- Include date range in every delegation
- Format final report as clean HTML with sections per source
- If a specialist returns no results, note "No updates" for that section`,
  tools: ['entity.query', 'agent.chat', 'email.send'],
})
```

## Specialist Agent

Each specialist is narrowly scoped to one data source. It receives a topic and date range, queries its domain, and returns structured results.

```typescript
import { defineAgent } from 'struere'

export default defineAgent({
  name: 'Source A Analyst',
  slug: 'source-a-analyst',
  version: '1.0.0',
  model: { model: 'openai/gpt-5-mini' },
  systemPrompt: `You research government publications relevant to a given topic.

When called via agent.chat, you receive a topic and date range.

WORKFLOW:
1. Query publication entities filtered by date range
2. Analyze relevance to the requested topic
3. Return a structured summary: title, date, relevance score, key points

RULES:
- Only return publications within the requested date range
- Score relevance 1-5, only include score >= 3
- Keep summaries under 200 words each`,
  tools: ['entity.query', 'fetch_publications'],
})
```

## Wiring with Triggers

A schedule trigger kicks off the orchestrator daily:

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

## Key Patterns

**Orchestrator has 3 tools max.** The orchestrator's job is coordination, not execution. It queries user preferences, delegates to specialists, and sends the final output. Keeping it lean prevents scope creep and tool confusion.

**Specialists are narrow scope.** Each specialist owns exactly one data source or domain. `source-a-analyst` only knows about government publications. It does not know about regulatory updates or industry news. This isolation makes each agent easier to test, debug, and swap out.

**Split by domain, not by function.** Don't create agents like "data-fetcher" and "data-formatter." Instead split by data domain: "government-analyst," "regulatory-analyst," "industry-analyst." Each agent owns the full pipeline for its domain — fetch, analyze, format.

**agent.chat depth stays at 2.** The orchestrator calls specialists, but specialists never call other agents. Keeping the depth to orchestrator → specialist (2 levels) avoids runaway chains, makes debugging tractable, and keeps latency predictable.

**Triggers kick off the orchestrator.** The cron trigger fires daily at 8 AM and sends a message to the orchestrator. The orchestrator then handles the full workflow autonomously. This decouples scheduling from logic — you can change the schedule without touching agent code.
