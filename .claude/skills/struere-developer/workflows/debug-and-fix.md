# Debugging and Fixing Issues

## Diagnosing Agent Behavior

1. Test the agent: `struere chat <slug>` — reproduce the issue
2. Check the system prompt: `struere compile-prompt <slug>` — look for TEMPLATE_ERROR
3. Check agent config: is the model correct? Are tools listed?
4. Fetch: https://docs.struere.dev/knowledge-base/how-to-handle-tool-errors.md

## Diagnosing Trigger Failures

1. `struere triggers list` — check enabled status and last run
2. `struere triggers logs <slug>` — see execution history
3. `struere triggers log <event-id>` — per-step detail
4. `struere triggers log <event-id> --verbose` — full tool call timeline
5. Common issues:
   - Tool not found — ensure it is defined in tools/index.ts and synced
   - Template variable empty — check that the field name matches the response shape
   - web.fetch returns empty — use returnFormat: "html", check the `html` field not `content`
6. Fetch: https://docs.struere.dev/platform/triggers.md

## Diagnosing Permission Issues

1. Fetch: https://docs.struere.dev/knowledge-base/how-to-debug-permission-denied.md
2. Check role policies — deny overrides allow (there is NO priority field)
3. Check scope rules — operators are `eq`, `neq`, `in`, `contains` only
4. Check field masks — allowlist strategy, new fields are hidden by default

## Analyzing Production Conversations

Use this when asked to find bugs or review how agents are performing in production.

1. `struere threads list` — see recent conversations (filter by agent/date if needed)
2. `struere threads view <thread-id>` — read the full conversation
3. Review the last 3-7 days of conversations
4. Look for: wrong tool calls, hallucinated data, user frustration, conversation dead-ends, incorrect information
5. Report patterns: "X conversations show the agent struggles with Y"
6. Suggest fixes: prompt changes, tool modifications, or new tools

## Quick Checks

- Sync status: `struere status`
- Diff local vs remote: `struere diff`
- Health check: `struere doctor`
- View conversation: `struere logs view <thread-id> --exec`
