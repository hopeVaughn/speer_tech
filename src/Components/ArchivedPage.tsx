import React from 'react';
import ActivityItem from './ActivityItem';
import { callData } from '../utils/data';

const ArchivePage: React.FC = () => {
  return (
    <section className="relative mt-12 flex flex-col overflow-auto h-[60vh]">
      <ActivityItem data={callData} onlyArchived={true} />
    </section>
  );
};

export default ArchivePage;
