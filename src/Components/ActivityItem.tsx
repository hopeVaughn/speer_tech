import React from 'react';
import ActivityDate from './ActivityDate';
import ActivityDetail from './ActivityDetail';
import { CallProps } from '../utils/propTypes';

interface ActivityItemProps {
  data: CallProps[];
  onlyArchived: boolean; // New prop
}

const ActivityItem: React.FC<ActivityItemProps> = ({ data, onlyArchived }) => {
  return (
    <>
      {data.filter(call => call.is_archived === onlyArchived).map((call) => {
        const callTime = new Date(call.created_at);
        const callType = call.call_type;
        const iconType = call.direction === 'inbound' ? 'incoming' : 'outgoing';

        return (
          <div className="flex flex-col p-4" key={call.id}>
            <ActivityDate date={callTime} />
            <ActivityDetail
              callNumber={call.from}
              callTime={callTime}
              iconType={iconType}
              callType={callType}
            />
          </div>
        );
      })}
    </>
  );
};

export default ActivityItem;
