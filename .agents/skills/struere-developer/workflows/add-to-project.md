# Adding Features to an Existing Project

## Adding a New Agent

1. Fetch: https://docs.struere.dev/sdk/define-agent.md
2. Run `bunx struere add agent <name>`
3. Check existing entity types — reuse before creating new ones
4. Test: `struere chat <slug>`

## Adding Custom Tools

1. Fetch: https://docs.struere.dev/sdk/define-tools.md
2. Fetch: https://docs.struere.dev/tools/custom-tools.md
3. Add the tool to tools/index.ts
4. Consider: can you consolidate with existing tools using action params?
5. Test: `struere run-tool <tool-name> --args '{...}'`

## Adding a New Entity Type

1. Fetch: https://docs.struere.dev/sdk/define-data.md
2. Run `bunx struere add data-type <name>`
3. Update agent system prompts if they use `{{entity.types()}}`

## Adding Triggers

1. Fetch: https://docs.struere.dev/sdk/define-trigger.md
2. Run `bunx struere add trigger <name>`
3. Entity triggers: specify entityType + action + optional condition
4. Schedule triggers: use 5-field cron + timezone
5. Verify: `struere triggers list` then `struere triggers logs <slug>`

## Adding a Router

1. Fetch: https://docs.struere.dev/sdk/define-router.md
2. Run `bunx struere add router <name>`
3. Test: `struere chat --router <slug>`

## Adding Integrations

For each integration, fetch the specific doc before writing any code:

- WhatsApp — Fetch: https://docs.struere.dev/integrations/whatsapp.md
- Google Calendar — Fetch: https://docs.struere.dev/integrations/google-calendar.md
- Airtable — Fetch: https://docs.struere.dev/integrations/airtable.md
- Email — Fetch: https://docs.struere.dev/integrations/resend.md
- Payments — Fetch: https://docs.struere.dev/integrations/flow-payments.md
- Voice — Fetch: https://docs.struere.dev/integrations/voice.md
- Widget — Fetch: https://docs.struere.dev/integrations/embeddable-widget.md

## Adding Roles / Permissions

1. Fetch: https://docs.struere.dev/sdk/define-role.md
2. Fetch: https://docs.struere.dev/knowledge-base/how-to-set-up-rbac.md

## Adding Evals

1. Fetch: https://docs.struere.dev/knowledge-base/how-to-test-with-evals.md
2. FIRST: test manually with `struere chat <slug>` several times
3. THEN: formalize patterns into end-to-end evals
4. Use `finalAssertions` for tool_called checks (agents may ask confirmation first)
