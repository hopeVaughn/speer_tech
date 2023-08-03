import React from 'react';
import ActivityItem from './ActivityItem';
import { callData } from '../utils/data';

const ActivityFeed: React.FC = () => {
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[60vh]">
      <ActivityItem data={callData} onlyArchived={false} />
    </section>
  );
};

export default ActivityFeed;
