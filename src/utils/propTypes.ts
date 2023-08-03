export type CallType = "missed" | "answered" | "voicemail";
export type CallDirection = "inbound" | "outbound";

export interface CallProps {
  call: {
    id: string;
    created_at: string;
    direction: CallDirection;
    from: string;
    to: string;
    via: string;
    duration: number;
    is_archived: boolean;
    call_type: CallType;
  };
}


