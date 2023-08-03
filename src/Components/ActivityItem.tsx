import React from 'react';
import ActivityDate from './ActivityDate';
import ActivityDetail from './ActivityDetail';
import { CallProps } from '../utils/propTypes';

interface ActivityItemProps {
  data: CallProps[];
}

const ActivityItem: React.FC<ActivityItemProps> = ({ data }) => {
  return (
    <>
      {data.map((call) => {
        // Convert the 'created_at' string to a Date object
        const callTime = new Date(call.created_at);
        const callType = call.call_type;
        // Map the 'direction' field to the 'iconType' field
        const iconType = call.direction === 'inbound' ? 'incoming' : 'outgoing';

        return (
          // Add the 'p-4' class to add padding
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
