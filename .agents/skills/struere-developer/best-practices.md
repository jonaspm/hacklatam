# Battle-Tested Best Practices

Lessons distilled from production Struere projects. Read this before designing agents, prompts, tools, or evals.

---

## Tool Design

- **Task-specific tools over generic CRUD.** Build `manage_booking` instead of using `entity.create` + `entity.update`. Benefits: safety by design, reduced hallucinations, simpler params.
- **Consolidate with action params.** Merge `schedule_session`, `reschedule_session`, `cancel_session` into one tool with `action: "schedule" | "reschedule" | "cancel"`. Reduces tool count without losing functionality.
- **Keep tools under 5 per agent.** Performance degrades significantly with more. If you need more, split into specialist agents.
- **Include entity IDs in template output.** Format as `**Name** [id:xxx]` to prevent ID hallucination. Never let the agent guess IDs.
- **Agents have 10 iterations max per request.** Design tools to complete workflows in as few calls as possible. Deeply chained tool calls or retry loops exhaust this limit.
- **Inject data dynamically.** Use template variables like `{{format_schedule({})}}` instead of making the agent call entity.query. The agent sees current data without tool calls.

## System Prompt Engineering

- **Priority hierarchy.** P0 (security) > P1 (data) > P2 (intent) > P3+ (flows). LLMs respect rules they see early.
- **Intent detection tables over paragraphs.** Markdown tables mapping signals → routes are more reliable than descriptive instructions.
- **Negative instructions are effective.** "NEVER fabricate IDs", "NEVER confirm without calling the tool" work better than positive equivalents.
- **Write each rule exactly once.** Duplicating rules across sections causes inconsistent behavior.
- **Resolve contradictions explicitly.** "ALWAYS recommend X" AND "respect user's choice" → "Recommend X conversationally. If user insists otherwise, respect their choice."
- **Keep prompts under 3000 words.** Shorter = less context rot = more consistent behavior.
- **Always test with `struere compile-prompt <slug>`.** Verify template injection before testing.

## Eval Strategy

- **Chat first, eval second.** Test with `struere chat <slug>` to discover actual behavior, then formalize patterns into evals.
- **Design end-to-end evals.** Test complete workflows, not individual turns. Agents mutate over time — broad evals survive longer.
- **Fewer, broader evals.** Many narrow evals deprecate quickly as agents evolve.
- **Use `finalAssertions` for tool checks.** Agents often ask for confirmation first — `tool_called` on Turn 1 fails.
- **Include current date in judge criteria.** LLM judges don't know today's date.
- **Align fixtures with eval data.** Evals referencing non-existent entities fail unpredictably.
- **Fix one thing at a time.** Fixes often interact. Test specific case, then move to next.
- **Re-run safety evals after functional changes.** Fixing one behavior can break another.

## Multi-Agent Architecture

- **Split by audience, not function.** Customer-facing agent + admin-facing agent, not booking-agent + notification-agent.
- **Each agent gets its own security rules.** Different audiences = different threat vectors.
- **Use triggers for inter-agent communication.** More reliable than direct agent.chat calls, plus retried and tracked.
- **Keep agent graph shallow.** Max depth 3 with agent.chat.
- **Orchestrator pattern for complex workflows.** One lean orchestrator (3 tools max) delegates to narrow specialists.

## Agent Behavior

- **Call the tool FIRST, respond AFTER.** Never say "I've booked that" without calling the tool first.
- **LLMs cannot calculate days of the week.** They will confidently produce wrong answers. Always inject `{{currentTime}}`, use ISO dates (YYYY-MM-DD), and instruct: "NEVER calculate day names manually."
- **Track context across turns.** Never re-ask for information already given — it feels robotic.
- **Graceful tool failure.** If a tool fails in voice/phone, move on — don't mention errors to the caller.
- **Voice agents must announce tool calls.** Before running a tool during a phone call, say a short filler ("Let me just check that in the system...") to avoid awkward silence while the tool executes. Without this, the caller thinks the line went dead.
- **Status guards prevent data corruption.** Check entity status before updating — a stale trigger could overwrite a paid booking with a cancellation.

## Production Debugging

- **Review conversations regularly.** Use `struere threads list` + `struere threads view` to spot patterns.
- **Focus on last 3-7 days.** Recent conversations surface active issues.
- **Look for:** wrong tool calls, hallucinated data, user frustration, dead-end conversations, incorrect information.
