import React from 'react';
import Archive from './Archive';
import ActivityItem from './ActivityItem';
import { CallProps } from '../utils/propTypes';

interface ArchivedPageProps {
  calls: CallProps[];
  refreshCalls: () => void;
}

const ArchivePage: React.FC<ArchivedPageProps> = ({ calls, refreshCalls }) => {
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[78vh]">
      <div className="sticky top-0 z-10">
        <Archive
          buttonText="Restore all messages"
          refreshCalls={refreshCalls}
          tabType='restore'
        />
      </div>
      <ActivityItem data={calls} onlyArchived={true} />
    </section>
  );
};

export default ArchivePage;
