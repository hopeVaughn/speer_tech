import React from 'react';
import ActivityItem from './ActivityItem';
import { callData } from '../utils/data';
import Archive from './Archive';

const ActivityFeed: React.FC = () => {
  const archiveAllMessages = () => {
    // Add the function that archives all messages here
  };
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[70vh]">
      <div className="sticky top-0 z-10">
        <Archive
          buttonText="Archive all messages"
          buttonAction={archiveAllMessages}
        />
      </div>
      <ActivityItem data={callData} onlyArchived={false} />
    </section>
  );
};

export default ActivityFeed;
