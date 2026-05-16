# Eval Design Patterns

## Approach: Chat First, Eval Second

1. Test manually with `struere chat <slug>` — run 3-5 diverse scenarios
2. Discover edge cases and actual agent behavior
3. THEN formalize into end-to-end evals based on real patterns

## End-to-End Eval (Recommended)

Design evals that test complete workflows, not individual turns:

```yaml
suite: "Booking End-to-End"
slug: booking-e2e
agent: booking-assistant
cases:
  - name: "Complete booking flow"
    turns:
      - user: "I'd like to book a haircut for tomorrow at 2pm"
      - user: "John Smith, john@email.com, 555-1234"
      - user: "Yes, that's correct"
    finalAssertions:
      - type: tool_called
        tool: manage_booking
      - type: llm_judge
        criteria: "Agent collected name, email, phone and confirmed the booking. Response includes booking details."

  - name: "Cancel with confirmation"
    turns:
      - user: "I need to cancel my appointment"
      - user: "The one on Friday"
      - user: "Yes, cancel it"
    finalAssertions:
      - type: tool_called
        tool: manage_booking
      - type: llm_judge
        criteria: "Agent confirmed which booking to cancel before proceeding. Used cancel action."
```

## Why finalAssertions Over Per-Turn Assertions

- Agents often ask for confirmation before acting — `tool_called` on Turn 1 will fail
- Agents may ask clarifying questions — this is GOOD behavior, not a failure
- End-to-end assertions test outcomes, not exact paths

## Eval Anti-Patterns

- **Too specific per-turn**: Breaks when agent adds a reasonable follow-up question
- **Too many evals**: Agent mutations deprecate them — fewer, broader evals are more maintainable
- **Missing date context**: LLM judges don't know the current date — include it in criteria
- **Mismatched fixtures**: Evals referencing entities that don't exist fail unpredictably — align fixtures with eval data
- **Judge hallucinations**: Make criteria specific with expected values, prefer `tool_called` for objective checks

## Running Evals

```bash
struere eval run <suite-name>
struere eval run <suite-name> --case "Complete booking flow"
```

## Key Lessons

- Fix one thing at a time, then re-run — fixes often interact
- Re-run safety evals after any functional change
- `gpt-5-mini` is often the best eval target (matches production model)
- The eval platform can hit server errors under load — don't retry in a loop
