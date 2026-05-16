import { defineData } from 'struere'

export default defineData({
  name: 'User Profile',
  slug: 'user-profile',
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      phone: { type: 'string' },
    },
    required: ['name', 'phone'],
  },
  searchFields: ['phone'],
})