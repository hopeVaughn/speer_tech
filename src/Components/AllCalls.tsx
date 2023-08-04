import React from 'react';
import ActivityItem from './ActivityItem';
import { CallProps } from '../utils/propTypes';
import Archive from './Archive';

interface AllCallsProps {
  calls: CallProps[];
}

const ActivityFeed: React.FC<AllCallsProps> = ({ calls }) => {
  const archiveAllMessages = () => {

  };
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[70vh]">
      <div className="sticky top-0 z-10">
        <Archive
          buttonText="Archive all messages"
          buttonAction={archiveAllMessages}
          tabType='archive'
        />
      </div>
      <ActivityItem data={calls} onlyArchived={false} />
    </section>
  );
};

export default ActivityFeed;
