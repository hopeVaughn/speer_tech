import React from 'react';
import ActivityDate from './ActivityDate';
import ActivityDetail from './ActivityDetail';

interface CallProps {
  call: {
    callNumber: string;
    callTime: Date;
    iconType: 'incoming' | 'outgoing';
  };
}

const ActivityItem: React.FC<CallProps> = ({ call }) => {
  return (
    <div className="flex flex-col">
      <ActivityDate date={call.callTime} />
      <ActivityDetail
        callNumber={call.callNumber}
        callTime={call.callTime}
        iconType={call.iconType}
      />
    </div>
  );
};

export default ActivityItem;
