import { defineData } from 'struere'

export default defineData({
  name: 'Meeting Summary',
  slug: 'meeting-summary',
  schema: {
    type: 'object',
    properties: {
      session_id: { type: 'string', description: 'Unique session identifier (e.g., DOPM-01-2026)' },
      meeting_date: { type: 'string', description: 'ISO date of the meeting' },
      title: { type: 'string', description: 'Meeting title' },
      video_title: { type: 'string', description: 'Original video title' },
      participants: { type: 'array', items: { type: 'string' }, description: 'List of participant names' },
      topics: { type: 'array', items: { type: 'string' }, description: 'Topics discussed' },
      decisions: { type: 'array', items: { type: 'string' }, description: 'Decisions made' },
      pending_actions: { type: 'array', items: { type: 'string' }, description: 'Pending actions' },
      important_points: { type: 'array', items: { type: 'string' }, description: 'Important points' },
      voting_records: { type: 'array', items: { type: 'string' }, description: 'Voting records' },
      follow_up_to: { type: 'string', description: 'Session ID this meeting follows up on' },
      whatsapp_summary: { type: 'string', description: 'WhatsApp-formatted summary text' },
      source: { type: 'string', description: 'URL of the source video' },
    },
    required: ['session_id', 'whatsapp_summary', 'source'],
  },
  searchFields: ['session_id', 'title', 'whatsapp_summary'],
})