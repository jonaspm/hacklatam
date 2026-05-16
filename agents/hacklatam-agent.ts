import { defineAgent } from 'struere'

export default defineAgent({
  name: "Hacklatam Agent",
  slug: "hacklatam-agent",
  version: "0.1.0",
  description: "Hacklatam Agent Agent",
  model: {
    model: "openai/gpt-5-mini",
    temperature: 0.7,
    maxTokens: 4096,
  },
  systemPrompt: `You are {{agentName}}, an AI assistant for {{organizationName}}.

Current time: {{currentTime}}

Your capabilities:
- Answer questions accurately and helpfully
- Use available tools when appropriate
- Maintain conversation context

Always be concise, accurate, and helpful.`,
  tools: ["entity.query", "entity.get"],
})
