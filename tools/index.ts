import { defineTools } from 'struere'
import { createClient } from '@tursodatabase/serverless/compat'

const MAX_SUMMARY_LENGTH = 64000

function getDbClient() {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN
  if (!url || !authToken) {
    throw new Error('TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must be set')
  }
  return createClient({ url, authToken })
}

function parseJsonField(value: string | null): unknown {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

interface SaveArgs {
  session_id: string
  meeting_date?: string
  title?: string
  video_title?: string
  participants?: string[]
  topics?: string[]
  decisions?: string[]
  pending_actions?: string[]
  important_points?: string[]
  voting_records?: string[]
  follow_up_to?: string
  whatsapp_summary: string
}

interface UpdateArgs {
  session_id: string
  updates: {
    meeting_date?: string
    title?: string
    video_title?: string
    participants?: string[]
    topics?: string[]
    decisions?: string[]
    pending_actions?: string[]
    important_points?: string[]
    voting_records?: string[]
    follow_up_to?: string
    whatsapp_summary?: string
  }
}

interface DeleteArgs {
  session_id: string
}

interface GetArgs {
  id: number
}

interface SearchArgs {
  query: string
  limit?: number
}

interface TimelineArgs {
  limit?: number
  offset?: number
}

interface FollowupArgs {
  title: string
  transcript: string
}

interface SuggestTopicArgs {
  transcript: string
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
      },
      required: ['session_id', 'whatsapp_summary'],
    },
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as unknown as SaveArgs
      const db = getDbClient()
      const whatsappSummary = a.whatsapp_summary.length > MAX_SUMMARY_LENGTH
        ? a.whatsapp_summary.substring(0, MAX_SUMMARY_LENGTH)
        : a.whatsapp_summary

      const result = await db.execute({
        sql: `INSERT INTO meetings (
          session_id, meeting_date, title, video_title, participants, topics,
          decisions, pending_actions, important_points, voting_records,
          follow_up_to, whatsapp_summary
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          a.session_id,
          a.meeting_date || null,
          a.title || null,
          a.video_title || null,
          JSON.stringify(a.participants || []),
          JSON.stringify(a.topics || []),
          JSON.stringify(a.decisions || []),
          JSON.stringify(a.pending_actions || []),
          JSON.stringify(a.important_points || []),
          JSON.stringify(a.voting_records || []),
          a.follow_up_to || null,
          whatsappSummary,
        ],
      })
      return { id: result.lastInsertRowid }
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
          },
        },
      },
      required: ['session_id', 'updates'],
    },
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as unknown as UpdateArgs
      const db = getDbClient()
      const sets: string[] = ['updated_at = datetime(\'now\')']
      const sqlArgs: (string | null)[] = []

      const u = a.updates
      if (u.meeting_date !== undefined) { sets.push('meeting_date = ?'); sqlArgs.push(u.meeting_date) }
      if (u.title !== undefined) { sets.push('title = ?'); sqlArgs.push(u.title) }
      if (u.video_title !== undefined) { sets.push('video_title = ?'); sqlArgs.push(u.video_title) }
      if (u.participants !== undefined) { sets.push('participants = ?'); sqlArgs.push(JSON.stringify(u.participants)) }
      if (u.topics !== undefined) { sets.push('topics = ?'); sqlArgs.push(JSON.stringify(u.topics)) }
      if (u.decisions !== undefined) { sets.push('decisions = ?'); sqlArgs.push(JSON.stringify(u.decisions)) }
      if (u.pending_actions !== undefined) { sets.push('pending_actions = ?'); sqlArgs.push(JSON.stringify(u.pending_actions)) }
      if (u.important_points !== undefined) { sets.push('important_points = ?'); sqlArgs.push(JSON.stringify(u.important_points)) }
      if (u.voting_records !== undefined) { sets.push('voting_records = ?'); sqlArgs.push(JSON.stringify(u.voting_records)) }
      if (u.follow_up_to !== undefined) { sets.push('follow_up_to = ?'); sqlArgs.push(u.follow_up_to) }
      if (u.whatsapp_summary !== undefined) {
        const trimmed = u.whatsapp_summary.length > MAX_SUMMARY_LENGTH ? u.whatsapp_summary.substring(0, MAX_SUMMARY_LENGTH) : u.whatsapp_summary
        sets.push('whatsapp_summary = ?'); sqlArgs.push(trimmed)
      }

      sqlArgs.push(a.session_id)
      await db.execute({
        sql: `UPDATE meetings SET ${sets.join(', ')} WHERE session_id = ? AND archived_at IS NULL`,
        args: sqlArgs,
      })
      return { updated: true }
    },
  },

  {
    name: 'meetings_delete_summary',
    description: 'Soft-delete a meeting summary by session_id (sets archived_at)',
    parameters: {
      type: 'object',
      properties: {
        session_id: { type: 'string', description: 'Session ID to archive' },
      },
      required: ['session_id'],
    },
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as unknown as DeleteArgs
      const db = getDbClient()
      await db.execute({
        sql: `UPDATE meetings SET archived_at = datetime('now'), updated_at = datetime('now') WHERE session_id = ? AND archived_at IS NULL`,
        args: [a.session_id],
      })
      return { archived: true }
    },
  },

  {
    name: 'meetings_get_summary',
    description: 'Retrieve a meeting summary by database id',
    parameters: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Database row id' },
      },
      required: ['id'],
    },
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as unknown as GetArgs
      const db = getDbClient()
      const result = await db.execute({
        sql: `SELECT * FROM meetings WHERE id = ? AND archived_at IS NULL`,
        args: [a.id],
      })
      if (!result.rows || result.rows.length === 0) {
        return { error: 'Summary not found' }
      }
      const row = result.rows[0] as Record<string, unknown>
      return {
        id: row.id,
        session_id: row.session_id,
        meeting_date: row.meeting_date,
        title: row.title,
        video_title: row.video_title,
        participants: parseJsonField(row.participants as string | null),
        topics: parseJsonField(row.topics as string | null),
        decisions: parseJsonField(row.decisions as string | null),
        pending_actions: parseJsonField(row.pending_actions as string | null),
        important_points: parseJsonField(row.important_points as string | null),
        voting_records: parseJsonField(row.voting_records as string | null),
        follow_up_to: row.follow_up_to,
        whatsapp_summary: row.whatsapp_summary,
        created_at: row.created_at,
        updated_at: row.updated_at,
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
    description: 'Full-text search across meeting summaries using FTS5',
    parameters: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query string' },
        limit: { type: 'number', description: 'Max results (default 20)' },
      },
      required: ['query'],
    },
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as unknown as SearchArgs
      const db = getDbClient()
      const limit = a.limit || 20
      const result = await db.execute({
        sql: `SELECT m.id, m.session_id, m.meeting_date, m.title, m.participants, m.topics
          FROM meetings_fts fts
          JOIN meetings m ON m.id = fts.rowid
          WHERE meetings_fts MATCH ? AND m.archived_at IS NULL
          ORDER BY rank
          LIMIT ?`,
        args: [a.query, limit] as (string | number)[],
      })
      return (result.rows || []).map((row: Record<string, unknown>) => ({
        id: row.id,
        session_id: row.session_id,
        meeting_date: row.meeting_date,
        title: row.title,
        participants: parseJsonField(row.participants as string | null),
        topics: parseJsonField(row.topics as string | null),
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
    handler: async (args, _context, _struere, _fetch) => {
      const a = args as TimelineArgs
      const db = getDbClient()
      const limit = a.limit || 10
      const offset = a.offset || 0
      const result = await db.execute({
        sql: `SELECT id, session_id, meeting_date, title, follow_up_to, created_at
          FROM meetings
          WHERE archived_at IS NULL
          ORDER BY meeting_date DESC, created_at DESC
          LIMIT ? OFFSET ?`,
        args: [limit, offset] as (string | number)[],
      })
      return (result.rows || []).map((row: Record<string, unknown>) => ({
        id: row.id,
        session_id: row.session_id,
        meeting_date: row.meeting_date,
        title: row.title,
        follow_up_to: row.follow_up_to,
        created_at: row.created_at,
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
    handler: async (args, _context, _struere, _fetch) => {
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
          const db = getDbClient()
          const existing = await db.execute({
            sql: `SELECT id, session_id, meeting_date, title, whatsapp_summary FROM meetings WHERE session_id = ? AND archived_at IS NULL LIMIT 1`,
            args: [priorSessionId],
          })
          if (existing.rows && existing.rows.length > 0) {
            const row = existing.rows[0] as Record<string, unknown>
            return {
              is_followup: true,
              follow_up_to_session_id: priorSessionId,
              context: {
                prior_session_id: row.session_id,
                prior_meeting_date: row.meeting_date,
                prior_title: row.title,
                prior_summary_snippet: row.whatsapp_summary ? (row.whatsapp_summary as string).substring(0, 500) : null,
              },
            }
          }
        }
      }
      return { is_followup: true, follow_up_to_session_id: null, context: 'Follow-up detected but prior session not found in database' }
    },
  },
])