import React from 'react';
import ActivityDate from './ActivityDate';
import ActivityDetail from './ActivityDetail';
import { CallProps } from '../utils/propTypes';


const ActivityItem: React.FC<CallProps> = ({ call }) => {  // Destructure 'call' from props
  // Then you can destructure properties from the 'call' object
  const { created_at, direction, from } = call;

  // Convert the 'created_at' string to a Date object
  const callTime = new Date(created_at);

  // Map the 'direction' field to the 'iconType' field
  const iconType = direction === 'inbound' ? 'incoming' : 'outgoing';

  return (
    <div className="flex flex-col">
      <ActivityDate date={callTime} />
      <ActivityDetail
        callNumber={from}
        callTime={callTime}
        iconType={iconType}
      />
    </div>
  );
};

export default ActivityItem;
