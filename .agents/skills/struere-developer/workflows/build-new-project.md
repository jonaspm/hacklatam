# Building a New Struere Project

## 1. Verify CLI

- Run `bun update struere` to get the latest version

## 2. Initialize the Project

- Run `bunx struere init`
- This scaffolds struere.json, tsconfig, and all standard directories

## 3. Start Dev Sync

- Run `bunx struere dev` in the background
- Keep it running throughout the entire workflow

## 4. Define Entity Types

Data model shapes the agent — define types first.

- Fetch: https://docs.struere.dev/sdk/define-data.md
- Run `bunx struere add data-type <name>`
- Define fields, relationships, and status enums

## 5. Define the Agent

- Fetch: https://docs.struere.dev/sdk/define-agent.md
- Run `bunx struere add agent <name>`
- Write the system prompt (see patterns/system-prompts.md for structure)
- Keep tools under 5
- Include `{{currentTime}}` and `{{organizationName}}` in the prompt

## 6. Define Custom Tools (If Needed)

- Fetch: https://docs.struere.dev/sdk/define-tools.md
- Fetch: https://docs.struere.dev/tools/custom-tools.md
- Add tools to tools/index.ts

## 7. Test Interactively

- Run `struere chat <slug>`
- Run 3-5 different conversation scenarios
- Note patterns, edge cases, and failures for later evals

## 8. Define Roles (If Needed)

- Fetch: https://docs.struere.dev/sdk/define-role.md
- Fetch: https://docs.struere.dev/knowledge-base/how-to-set-up-rbac.md

## 9. Define Triggers (If Needed)

- Fetch: https://docs.struere.dev/sdk/define-trigger.md
- Run `bunx struere add trigger <name>`

## 10. Define Router (If Multiple Agents Share a Channel)

- Fetch: https://docs.struere.dev/sdk/define-router.md
- Run `bunx struere add router <name>`

## 11. Build Evals

- Fetch: https://docs.struere.dev/knowledge-base/how-to-test-with-evals.md
- Build evals from patterns discovered during chat testing (step 7)
- Design end-to-end evals, not per-turn assertions

## 12. Deploy

- Run `bunx struere deploy`
