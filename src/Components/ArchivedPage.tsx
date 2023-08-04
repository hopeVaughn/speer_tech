import React from 'react';
import Archive from './Archive';
import ActivityItem from './ActivityItem';
import { callData } from '../utils/data';

const ArchivePage: React.FC = () => {
  const restoreAllMessages = () => {
    // Add the function that restores all messages here
  };
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[70vh]">
      <div className="sticky top-0 z-10">
        <Archive
          buttonText="Restore all messages"
          buttonAction={restoreAllMessages}
        />
      </div>
      <ActivityItem data={callData} onlyArchived={true} />
    </section>
  );
};

export default ArchivePage;
