---
name: struere-developer
description: "Build, test, and observe AI agents on the Struere platform — an AI-native SDK and CLI designed for agent-driven development. Use when struere.json is present, working with the Struere SDK (defineAgent, defineData, defineRole, defineRouter, defineTrigger, defineTools), running struere CLI commands (dev, deploy, chat, threads, triggers, eval), or when imports come from the 'struere' package."
metadata:
  author: struere
  version: 2.0.0
  category: developer-tools
---

# Struere Developer

Struere is an AI-native full-stack agent platform. Define agents, data types, roles, triggers, routers, and tools as TypeScript — then sync to dev and deploy to prod.

## Rules

1. **Ensure `struere dev` is running.** Before making any changes, verify `struere dev` is running in the background. If it's not running or not available, use `bunx struere sync` after each change. Never ask the user whether to sync — just keep changes synced.
2. **Fetch docs before writing code.** NEVER write or modify Struere code without first fetching the relevant URL from the documentation table below. Every time. No exceptions. Do not work from memory.
3. **Use `struere chat` to test.** After creating or modifying an agent, test it with `struere chat <slug>` to simulate conversations before writing evals. Run multiple test conversations to discover edge cases.
4. **Ask before assuming.** Before creating an agent, ask what it should do, who it serves, and what tools it needs. Do not guess requirements.
5. **One export per file.** Each file in agents/, entity-types/, roles/, triggers/, routers/ exports a single default. Only tools/index.ts exports all custom tools.
6. **Slugs are identities.** Renaming a slug creates a new resource — it does not rename the existing one.
7. **Environments are isolated.** `struere dev` syncs to development + eval (eval excludes triggers and routers). `struere deploy` syncs to production.
8. **Roles work for both users and agents.** A role's policies/scope rules/field masks apply to whoever is assigned to it. Users get roles via the dashboard; agents declare them in code via `defineAgent({ roles: [...] })`. Don't conflate `agentAccess` (dashboard ACL) with `agent.roles` (permission inheritance). Roles use `slug` for identity (lowercase, alphanumeric + hyphens); `name` is a display label. Always declare `slug` on new roles — it'll be required in a future major version.
9. **Keep tools under 5 per agent.** Split into specialist agents with `agent.chat` if you need more.
10. **Use bun, never npm.** Always `bun install`, `bun run`, `bunx`.
11. **Use `struere keys` for credentials.** Get API keys via `struere keys create` from the CLI — don't direct users to the dashboard for routine key management.
12. **Keep CLI updated.** Run `bun update struere` to ensure you're on the latest SDK/CLI version before starting work.

## Documentation

**Core SDK** (fetch before defining any resource):

| Task | URL |
|------|-----|
| Define an agent | https://docs.struere.dev/sdk/define-agent.md |
| Define a data type | https://docs.struere.dev/sdk/define-data.md |
| Define a role / permissions | https://docs.struere.dev/sdk/define-role.md |
| Define a trigger | https://docs.struere.dev/sdk/define-trigger.md |
| Define a router | https://docs.struere.dev/sdk/define-router.md |
| Define custom tools | https://docs.struere.dev/sdk/define-tools.md |
| Full SDK reference | https://docs.struere.dev/llms-sdk.txt |

**Tools & Prompts** (fetch when configuring agent behavior):

| Task | URL |
|------|-----|
| System prompt templates | https://docs.struere.dev/tools/system-prompt-templates.md |
| Built-in tools list | https://docs.struere.dev/tools/built-in-tools.md |
| Custom tools guide | https://docs.struere.dev/tools/custom-tools.md |
| Model configuration | https://docs.struere.dev/reference/model-configuration.md |

**Integrations** (fetch when adding channels):

| Task | URL |
|------|-----|
| WhatsApp | https://docs.struere.dev/integrations/whatsapp.md |
| Google Calendar | https://docs.struere.dev/integrations/google-calendar.md |
| Airtable | https://docs.struere.dev/integrations/airtable.md |
| Email (Resend) | https://docs.struere.dev/integrations/resend.md |
| Flow Payments | https://docs.struere.dev/integrations/flow-payments.md |
| Voice (Twilio) | https://docs.struere.dev/integrations/voice.md |
| Embeddable widget | https://docs.struere.dev/integrations/embeddable-widget.md |
| All integrations | https://docs.struere.dev/llms-integrations.txt |

**API & Reference** (fetch when integrating externally):

| Task | URL |
|------|-----|
| Chat API | https://docs.struere.dev/llms-api.txt |
| OpenAPI spec | https://docs.struere.dev/openapi.yaml |
| JavaScript client | https://docs.struere.dev/api/javascript-client.md |
| API keys CLI | https://docs.struere.dev/cli/keys.md |
| Error codes | https://docs.struere.dev/reference/error-codes.md |
| Rate limits | https://docs.struere.dev/reference/rate-limiting.md |
| Project structure | https://docs.struere.dev/reference/project-structure.md |

**Knowledge Base** (fetch when debugging or architecting):

| Task | URL |
|------|-----|
| RBAC setup | https://docs.struere.dev/knowledge-base/how-to-set-up-rbac.md |
| Debug permission denied | https://docs.struere.dev/knowledge-base/how-to-debug-permission-denied.md |
| Handle tool errors | https://docs.struere.dev/knowledge-base/how-to-handle-tool-errors.md |
| Manage environments | https://docs.struere.dev/knowledge-base/how-to-manage-environments.md |
| Test with evals | https://docs.struere.dev/knowledge-base/how-to-test-with-evals.md |
| Multiple agents | https://docs.struere.dev/knowledge-base/how-to-use-multiple-agents.md |
| Template variables | https://docs.struere.dev/knowledge-base/how-to-use-template-variables.md |
| Add chatbot to website | https://docs.struere.dev/knowledge-base/how-to-add-chatbot-to-website.md |
| Best practices | https://docs.struere.dev/knowledge-base/best-practices.md |
| Debug triggers | https://docs.struere.dev/platform/triggers.md |

**CLI & Full Docs**:

| Task | URL |
|------|-----|
| CLI commands | https://docs.struere.dev/llms-cli.txt |
| Platform concepts | https://docs.struere.dev/llms-platform.txt |
| Full documentation | https://docs.struere.dev/llms-full.txt |
| Docs index | https://docs.struere.dev/llms.txt |

## What are you trying to do?

- **Building a new project from scratch** → see [workflows/build-new-project.md](workflows/build-new-project.md)
- **Adding features to an existing project** → see [workflows/add-to-project.md](workflows/add-to-project.md)
- **Calling Struere from an external app (web/mobile/server)** → see [patterns/external-integration.md](patterns/external-integration.md)
- **Debugging or fixing issues** → see [workflows/debug-and-fix.md](workflows/debug-and-fix.md)
- **Making an architecture decision** (model, tools, multi-agent) → see [decision-frameworks.md](decision-frameworks.md)
- **Configuring per-agent permissions (different agents see different data)** → see [patterns/agent-complex.md](patterns/agent-complex.md)
- **Need a code example** → see [patterns/](patterns/) directory
- **Writing or reviewing code** → check [platform-gotchas.md](platform-gotchas.md) before submitting
- **Designing agents, prompts, tools, or evals** → see [best-practices.md](best-practices.md)
