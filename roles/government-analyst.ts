import { defineRole } from 'struere'

export default defineRole({
  name: 'government-analyst',
  slug: 'government-analyst',
  description: 'Permissions for the Government Analyst agent',
  policies: [
    { resource: 'user-profile', actions: ['list', 'read'], effect: 'allow' },
  ],
})