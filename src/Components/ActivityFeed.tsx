import React from 'react';
import ActivityItem from './ActivityItem';
import { callData } from '../utils/data';


const ActivityFeed: React.FC = () => {
  return (
    <div className="relative mt-12 flex flex-col">
      {callData.map((call, index) => (
        <ActivityItem key={index} call={call} />
      ))}
    </div>
  );
};

export default ActivityFeed;
