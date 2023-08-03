export type CallDirection = 'inbound' | 'outbound';
export type CallType = 'missed' | 'answered' | 'voicemail';

export interface CallProps {
  id: string;
  created_at: string;
  direction: CallDirection;
  from: string;
  to: string;
  via: string;
  duration: number;
  is_archived: boolean;
  call_type: CallType;
}
