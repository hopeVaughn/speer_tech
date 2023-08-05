import React from 'react';
import ActivityItem from './ActivityItem';
import { CallProps } from '../utils/propTypes';
import Archive from './Archive';

interface AllCallsProps {
  calls: CallProps[];
  handleButtonClick: (tabType: string) => void;  // add this line
}

const ActivityFeed: React.FC<AllCallsProps> = ({ calls, handleButtonClick }) => {
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[78vh]">
      <div className="sticky top-0 z-10">
        <Archive
          buttonText="Archive all messages"
          handleButtonClick={handleButtonClick}
          tabType='archive'
        />
      </div>
      <ActivityItem data={calls} onlyArchived={false} />
    </section>
  );
};

export default ActivityFeed;
