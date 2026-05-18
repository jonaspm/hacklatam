import { defineTools } from 'struere'
import {
  type SaveArgs,
  type UpdateArgs,
  type DeleteArgs,
  type GetArgs,
  type SearchArgs,
  type TimelineArgs,
  type FollowupArgs,
  type SuggestTopicArgs,
} from './db'

interface MeetingEntity {
  id: string
  type: string
  status: string
  data: Record<string, unknown>
  createdAt: number
  updatedAt: number
}

const parseJsonField = (value: unknown): unknown => {
  if (typeof value === 'string') {
    try { return JSON.parse(value) } catch { return value }
  }
  return value ?? null
}

export default defineTools([
  {
    name: 'meetings_save_summary',
    description: 'Save a new meeting summary to the database',
    parameters: {
      type: 'object',
      properties: {
        session_id: { type: 'string', description: 'Unique session identifier (e.g., DOPM-01-2026)' },
        meeting_date: { type: 'string', description: 'Date of the meeting' },
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
    handler: async (args, _context, struere, _fetch) => {
      const MAX_SUMMARY_LENGTH = 64000;
      const a = args as unknown as SaveArgs
      const whatsappSummary = a.whatsapp_summary.length > MAX_SUMMARY_LENGTH
        ? a.whatsapp_summary.substring(0, MAX_SUMMARY_LENGTH)
        : a.whatsapp_summary

      const result = await struere.entity.create({
        type: 'meeting-summary',
        data: {
          session_id: a.session_id,
          meeting_date: a.meeting_date || null,
          title: a.title || null,
          video_title: a.video_title || null,
          participants: a.participants || [],
          topics: a.topics || [],
          decisions: a.decisions || [],
          pending_actions: a.pending_actions || [],
          important_points: a.important_points || [],
          voting_records: a.voting_records || [],
          follow_up_to: a.follow_up_to || null,
          whatsapp_summary: whatsappSummary,
          source: a.source,
        },
      })
      return { id: result.id }
    },
  },

  {
    name: 'meetings_update_summary',
    description: 'Update an existing meeting summary by session_id',
    parameters: {
      type: 'object',
      properties: {
        session_id: { type: 'string', description: 'Session ID to update' },
        updates: {
          type: 'object',
          description: 'Fields to update',
          properties: {
            meeting_date: { type: 'string' },
            title: { type: 'string' },
            video_title: { type: 'string' },
            participants: { type: 'array', items: { type: 'string' } },
            topics: { type: 'array', items: { type: 'string' } },
            decisions: { type: 'array', items: { type: 'string' } },
            pending_actions: { type: 'array', items: { type: 'string' } },
            important_points: { type: 'array', items: { type: 'string' } },
            voting_records: { type: 'array', items: { type: 'string' } },
            follow_up_to: { type: 'string' },
            whatsapp_summary: { type: 'string' },
            source: { type: 'string' },
          },
        },
      },
      required: ['session_id', 'updates'],
    },
    handler: async (args, _context, struere, _fetch) => {
      const MAX_SUMMARY_LENGTH = 64000;
      const a = args as unknown as UpdateArgs
      const existing = await struere.entity.query({
        type: 'meeting-summary',
        filters: { 'data.session_id': a.session_id },
        limit: 1,
      })
      if (!existing || existing.length === 0) {
        return { error: 'Summary not found' }
      }
      const entityId = existing[0]!.id

      const updateData: Record<string, unknown> = {}
      const u = a.updates
      if (u.meeting_date !== undefined) updateData.meeting_date = u.meeting_date
      if (u.title !== undefined) updateData.title = u.title
      if (u.video_title !== undefined) updateData.video_title = u.video_title
      if (u.participants !== undefined) updateData.participants = u.participants
      if (u.topics !== undefined) updateData.topics = u.topics
      if (u.decisions !== undefined) updateData.decisions = u.decisions
      if (u.pending_actions !== undefined) updateData.pending_actions = u.pending_actions
      if (u.important_points !== undefined) updateData.important_points = u.important_points
      if (u.voting_records !== undefined) updateData.voting_records = u.voting_records
      if (u.follow_up_to !== undefined) updateData.follow_up_to = u.follow_up_to
      if (u.whatsapp_summary !== undefined) {
        updateData.whatsapp_summary = u.whatsapp_summary.length > MAX_SUMMARY_LENGTH
          ? u.whatsapp_summary.substring(0, MAX_SUMMARY_LENGTH)
          : u.whatsapp_summary
      }
      if (u.source !== undefined) updateData.source = u.source

      await struere.entity.update({ id: entityId, data: updateData })
      return { updated: true }
    },
  },

  {
    name: 'meetings_delete_summary',
    description: 'Soft-delete a meeting summary by session_id',
    parameters: {
      type: 'object',
      properties: {
        session_id: { type: 'string', description: 'Session ID to archive' },
      },
      required: ['session_id'],
    },
    handler: async (args, _context, struere, _fetch) => {
      const a = args as unknown as DeleteArgs
      const existing = await struere.entity.query({
        type: 'meeting-summary',
        filters: { 'data.session_id': a.session_id },
        limit: 1,
      })
      if (!existing || existing.length === 0) {
        return { error: 'Summary not found' }
      }
      await struere.entity.delete({ id: existing[0]!.id })
      return { archived: true }
    },
  },

  {
    name: 'meetings_get_summary',
    description: 'Retrieve a meeting summary by session_id',
    parameters: {
      type: 'object',
      properties: {
        session_id: { type: 'string', description: 'Session ID (e.g., DOPM-01-2026)' },
      },
      required: ['session_id'],
    },
    handler: async (args, _context, struere, _fetch) => {
      const a = args as unknown as GetArgs
      const existing = await struere.entity.query({
        type: 'meeting-summary',
        filters: { 'data.session_id': a.session_id },
        limit: 1,
      })
      if (!existing || existing.length === 0) {
        return { error: 'Summary not found' }
      }
      const entity = existing[0]!
      const d = entity.data
      return {
        id: entity.id,
        session_id: d.session_id,
        meeting_date: d.meeting_date,
        title: d.title,
        video_title: d.video_title,
        participants: d.participants,
        topics: d.topics,
        decisions: d.decisions,
        pending_actions: d.pending_actions,
        important_points: d.important_points,
        voting_records: d.voting_records,
        follow_up_to: d.follow_up_to,
        whatsapp_summary: d.whatsapp_summary,
        source: d.source,
        created_at: entity.createdAt,
        updated_at: entity.updatedAt,
      }
    },
  },

  {
    name: 'meetings_suggest_topic',
    description: 'Extract topic keywords from a transcript for FTS indexing',
    parameters: {
      type: 'object',
      properties: {
        transcript: { type: 'string', description: 'Full or partial transcript text' },
      },
      required: ['transcript'],
    },
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as unknown as SuggestTopicArgs
      const text = a.transcript
      const stopWords = new Set(['el', 'la', 'los', 'las', 'un', 'una', 'de', 'del', 'al', 'en', 'con', 'por', 'para', 'sin', 'sobre', 'entre', 'es', 'son', 'fue', 'eran', 'se', 'le', 'lo', 'que', 'y', 'o', 'a', 'como'])
      const words = text.toLowerCase().replace(/[^\w\sáéíóúñ]/g, '').split(/\s+/)
      const freq: Record<string, number> = {}
      for (const w of words) {
        if (w.length > 3 && !stopWords.has(w)) freq[w] = (freq[w] || 0) + 1
      }
      const sorted = Object.entries(freq).sort(([, a], [, b]) => b - a)
      const topics = sorted.slice(0, 10).map(([word]) => word)
      return { topics }
    },
  },

  {
    name: 'meetings_search',
    description: 'Search across meeting summaries by text query',
    parameters: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query string' },
        limit: { type: 'number', description: 'Max results (default 20)' },
      },
      required: ['query'],
    },
    handler: async (args, _context, struere, _fetch) => {
      const a = args as unknown as SearchArgs
      const limit = a.limit || 20
      const results = await struere.entity.query({
        type: 'meeting-summary',
        filters: { search: a.query },
        limit,
      })
      return results.map((r: MeetingEntity) => ({
        id: r.id,
        session_id: r.data.session_id,
        meeting_date: r.data.meeting_date,
        title: r.data.title,
        participants: parseJsonField(r.data.participants),
        topics: parseJsonField(r.data.topics),
      }))
    },
  },

  {
    name: 'meetings_timeline',
    description: 'Get paginated list of past meeting summaries',
    parameters: {
      type: 'object',
      properties: {
        limit: { type: 'number', description: 'Max results (default 10)' },
        offset: { type: 'number', description: 'Offset for pagination (default 0)' },
      },
    },
    handler: async (args, _context, struere, _fetch) => {
      const a = args as unknown as TimelineArgs
      const limit = a.limit || 10
      const results = await struere.entity.query({
        type: 'meeting-summary',
        limit: 100,
      })
      const sorted = (results as Array<{ data: Record<string, unknown>; id: string; createdAt: number }>)
        .sort((b, a) => (a.data.meeting_date as string || String(a.createdAt)).localeCompare((b.data.meeting_date as string) || String(b.createdAt)))
        .slice(a.offset || 0, (a.offset || 0) + limit)
      return sorted.map((row) => ({
        id: row.id,
        session_id: row.data.session_id,
        meeting_date: row.data.meeting_date,
        title: row.data.title,
        follow_up_to: row.data.follow_up_to,
        created_at: row.createdAt,
      }))
    },
  },

  {
    name: 'meetings_check_followup',
    description: 'Check if a meeting is a follow-up by analyzing session_id pattern in title or transcript',
    parameters: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'Video or meeting title' },
        transcript: { type: 'string', description: 'Transcript text to search for session references' },
      },
      required: ['title', 'transcript'],
    },
    handler: async (args, _context, struere, _fetch) => {
      const a = args as unknown as FollowupArgs
      const pattern = /\w{1,4}-\d+-\d{4}/
      const combinedText = `${a.title} ${a.transcript}`
      const matches = combinedText.match(new RegExp(pattern))
      if (!matches) {
        return { is_followup: false, follow_up_to_session_id: null, context: null }
      }
      const currentSessionId = matches[0]
      const followUpKeywords = ['continuación', 'continua', 'seguimiento', 'subsiguiente', 'posterior', 'consecutiva', 'sesión anterior', 'sesión previa', 'aprobación pendiente', 'votación anterior']
      const textLower = combinedText.toLowerCase()
      const isFollowUp = followUpKeywords.some(kw => textLower.includes(kw))
      if (!isFollowUp) {
        return { is_followup: false, follow_up_to_session_id: null, context: null }
      }
      const basePattern = currentSessionId.replace(/-\d+$/, '')
      const versionMatch = currentSessionId.match(/-(\d+)$/)
      if (versionMatch) {
        const prevNum = parseInt(versionMatch[1]!, 10) - 1
        if (prevNum > 0) {
          const priorSessionId = `${basePattern}-${prevNum}`
          const existing = await struere.entity.query({
            type: 'meeting-summary',
            filters: { 'data.session_id': priorSessionId },
            limit: 1,
          })
          if (existing && existing.length > 0) {
            const row = existing[0]!
            return {
              is_followup: true,
              follow_up_to_session_id: priorSessionId,
              context: {
                prior_session_id: row.data.session_id,
                prior_meeting_date: row.data.meeting_date,
                prior_title: row.data.title,
                prior_summary_snippet: row.data.whatsapp_summary ? (row.data.whatsapp_summary as string).substring(0, 500) : null,
              },
            }
          }
        }
      }
      return { is_followup: true, follow_up_to_session_id: null, context: 'Follow-up detected but prior session not found in database' }
    },
  },
])