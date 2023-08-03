export interface Call {
  id: string;
  created_at: string;
  direction: string;
  from: string;
  to: string;
  via: string;
  duration: number;
  is_archived: boolean;
  call_type: string;
}

export interface CallProps {
  calls: Call[];
}
