export interface SaveArgs {
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
  source: string
}

export interface UpdateArgs {
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
    source?: string
  }
}

export interface DeleteArgs {
  session_id: string
}

export interface GetArgs {
  session_id: string
}

export interface SearchArgs {
  query: string
  limit?: number
}

export interface TimelineArgs {
  limit?: number
  offset?: number
}

export interface FollowupArgs {
  title: string
  transcript: string
}

export interface SuggestTopicArgs {
  transcript: string
}