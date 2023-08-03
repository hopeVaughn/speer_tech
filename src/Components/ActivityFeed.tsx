import React from 'react';
import ActivityItem from './ActivityItem';
import { callData } from '../utils/data';

const ActivityFeed: React.FC = () => {
  return (
    <div className="relative mt-12 flex flex-col overflow-auto h-[60vh]"> {/* Set height relative to viewport height */}
      <ActivityItem data={callData} />
    </div>
  );
};

export default ActivityFeed;
