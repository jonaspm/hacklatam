import { defineRole } from 'struere'

export default defineRole({
  name: 'hacklatam-agent',
  slug: 'hacklatam-agent',
  description: 'Permissions for the Hacklatam registration agent',
  policies: [
    { resource: 'user-profile', actions: ['list', 'read', 'create'], effect: 'allow' },
  ],
})