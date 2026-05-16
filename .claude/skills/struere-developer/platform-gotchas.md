# Platform Silent Failure Gotchas

These mistakes cause no visible errors but produce wrong behavior. Check this list before submitting any Struere code.

---

1. **PolicyConfig has NO `priority` field.** Deny always overrides allow automatically. Adding `priority` does nothing.

2. **Scope rule operators: `eq`, `neq`, `in`, `contains` only.** Using `ne` (common in other systems) silently fails to match.

3. **Entity responses use `id` field, not `_id`.** `entity.query`, `entity.get`, and `entity.create` all return `id` in the public API. Using `._id` returns undefined.

4. **Model IDs use OpenRouter format: `provider/model-name`.** Write `openai/gpt-5-mini`, not `gpt-5-mini`. No format validation — invalid models only fail at runtime.

5. **Default model is `openai/gpt-5-mini`** (temperature 0.7, maxTokens 4096) when `model` is omitted.

6. **Field masks use allowlist strategy.** New fields added to a data type are hidden by default if a field mask exists. An empty `allowedFields` with no `hiddenFields` returns only `_id` and `_creationTime`.

7. **Template variables that fail resolve to `[TEMPLATE_ERROR: variableName not found]`.** Test with `struere compile-prompt <agent-slug>`.

8. **Custom tool `fetch` (4th parameter) is unrestricted** — can reach any domain. Use `struere.web.fetch()` (3rd parameter SDK) for structured web scraping with markdown conversion.

9. **`entity.query` default limit is 100, max is 100.** For more data, paginate or use template-only tools for prompt injection.

10. **`agent.chat` has depth limit 3 with cycle detection.** A calling B calling A is blocked. Each call generates a new conversationId if not provided, breaking multi-turn continuity.

11. **Fixture sync deletes ALL existing entities in eval** and recreates from YAML. Full reset every sync.

12. **`whatsappOwnedTemplates` is org-scoped, not env-scoped.** Templates are shared across dev/prod.

13. **`web.fetch` returns different fields per format.** `returnFormat: "html"` → `html` field. Default markdown → `content` field. Always check the right field.

14. **Trigger execution errors are only visible via `struere triggers logs`.** Immediate triggers don't create triggerRuns records. Use `struere triggers logs <slug>` for history, `struere triggers log <event-id>` for details.

15. **`router.transfer` only works inside a router context.** Calling it on a non-router thread throws an error. Only add to agents that are part of a router.

16. **`agent.chat` in triggers may show "success" while having internal tool errors.** The agent self-corrects, so the step succeeds. Use `--verbose` to see full tool call timeline.

17. **`resolveThreadForPhone` silently fails on connection errors.** WhatsApp send operations may not link to the correct thread.

18. **Role `agentAccess` slug matching is case-sensitive.** Wrong case silently fails to grant access.

19. **Scope rule `actor.relatedIds:relationType` silently returns empty** if relationType doesn't match any entity relations exactly.

20. **Triggers execute with `system` actor type.** All role-based permission checks are bypassed. This is by design but represents implicit full access.

21. **`entity.query` uses `filters` (not `filter`) with flat key-value syntax.** Correct: `filters: { email: "a@b.com" }`. For operators: `filters: { grade: { "_op_in": ["9th", "10th"] } }`. Available operators: `_op_in`, `_op_nin`, `_op_ne`, `_op_gt`, `_op_gte`, `_op_lt`, `_op_lte`.

22. **Template variables can fail intermittently.** Always include a fallback tool (like entity.query) and prompt instruction: "If data shows TEMPLATE_ERROR, use entity.query as fallback."

23. **Calendar.create can crash trigger chains.** Wrap in try-catch and return fallback values instead of throwing.

24. **Phone numbers need fuzzy matching.** Different systems format differently. Match by last 9 digits: `phone.replace(/[^\d]/g, '').slice(-9)`.

25. **`entity.query` responses vary in shape.** Sometimes `{ results: [...] }`, sometimes `[...]`. Normalize: `Array.isArray(result) ? result : result?.results || []`.

26. **Credits can go negative** due to race conditions in concurrent requests. Pre-check validates only estimated tokens.

27. **Agents have a 10-iteration tool call limit per request.** Continuous retry loops or deeply chained tool calls exhaust this limit silently. Design tools to complete in fewer calls.

28. **Eval environment excludes triggers and routers.** `struere dev` syncs agents, tools, data types, roles, evals, and fixtures to eval — but NOT triggers or routers. Test those in the development environment.

29. **Day-of-week calculations are unreliable in LLMs.** Agents will confidently produce wrong day names. Always inject `{{currentTime}}`, mandate ISO date format (YYYY-MM-DD), and instruct agents never to calculate day names manually.

30. **Multi-org admins must scope CLI commands to a single project.** The CLI uses the org from `struere.json`. As of 0.14.3, all read commands explicitly scope to that org and the backend rejects ambiguous calls from multi-org users. If you see "organizationId is required" errors, your `struere.json` is missing or pointing at an org you don't belong to — re-run `struere init` or check `~/.struere/auth.json`.

31. **The default `"agent"` role is a fallback, not a magic system role.** If you do not declare `roles: [...]` on `defineAgent`, the agent falls back to a single shared role named `"agent"`. Whatever scope rules / policies are on that role apply to ALL agents. To customize per-agent permissions, declare `roles: ['your-role-slug']`. The fallback exists so zero-config agents still work.

32. **`role.agentAccess` is a dashboard ACL, NOT permission inheritance.** `agentAccess: ['agent-slug']` on a role means "users with this role can chat with these agents via the dashboard." It does NOT grant the agent any permissions. To grant an agent a role's permissions, declare `roles: ['role-slug']` on the agent side.

33. **Use `data.<field>` for non-indexed scope rules and Data API filters.** When writing scope rules or `filters` that target user-defined fields, prefix with `data.` (e.g., `data.status`, `data.teamId`). Top-level filters are restricted to indexed columns and return `400 Bad Request` listing what IS queryable. Top-level `status` is the entity lifecycle column (`active`, `archived`, `deleted`) — a foot-gun: it is rejected as a filter, and the error points to `data.status`. Always use `data.status` for your domain status field.

34. **Roles use `slug` as identity (additive in 0.14.5).** Declare `slug` on every new role: `defineRole({ slug: 'coach', name: 'Coach', ... })`. The `name` field stays as a display label; `slug` is what agents reference in `roles: ['coach']` and what scope rules / dashboard ACLs match against. Existing roles without `slug` continue to work — they get one auto-derived from `name` on next sync. Required in a future major version — declare it explicitly now.
