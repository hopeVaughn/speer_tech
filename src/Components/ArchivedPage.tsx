import React from 'react';
import Archive from './Archive';
import ActivityItem from './ActivityItem';
import { CallProps } from '../utils/propTypes';

interface ArchivedPageProps {
  calls: CallProps[];
  handleButtonClick: (tabType: string) => void;
  setSelectedCalls: React.Dispatch<React.SetStateAction<string[]>>;
  showCheckboxes: boolean;
}

const ArchivePage: React.FC<ArchivedPageProps> = ({ calls, handleButtonClick, showCheckboxes, setSelectedCalls }) => {
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[78vh]">
      <div className="sticky top-0 z-10">
        <Archive
          buttonText="Restore all messages"
          tabType='restore'
          handleButtonClick={handleButtonClick}
          showCheckboxes={showCheckboxes}

        />
      </div>
      <ActivityItem data={calls} onlyArchived={true} showCheckboxes={showCheckboxes} setSelectedCalls={setSelectedCalls} />
    </section>
  );
};

export default ArchivePage;
