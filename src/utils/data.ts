
export enum CallDirection {
  Inbound = 'inbound',
  Outbound = 'outbound',
}

export enum CallType {
  Missed = 'missed',
  Answered = 'answered',
  Voicemail = 'voicemail',
}

export const callData = [
  {
    id: 'id-0',
    created_at: '2021-06-01T18:29:20.000Z',
    direction: CallDirection.Inbound,
    from: '1234567890',
    to: '0987654321',
    via: '+1234567890',
    duration: 300,
    is_archived: false,
    call_type: CallType.Answered,
  },
  {
    id: 'id-1',
    created_at: '2021-06-02T18:29:20.000Z',
    direction: CallDirection.Outbound,
    from: '0987654321',
    to: '1234567890',
    via: '+1234567890',
    duration: 120,
    is_archived: false,
    call_type: CallType.Voicemail,
  },
  {
    id: 'id-2',
    created_at: '2021-06-03T18:29:20.000Z',
    direction: CallDirection.Inbound,
    from: '1234567890',
    to: '0987654321',
    via: '+1234567890',
    duration: 45,
    is_archived: true,
    call_type: CallType.Missed,
  },
];
