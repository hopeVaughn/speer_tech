import React from 'react';
import ActivityItem from './ActivityItem';

// This is just placeholder data - replace with your API data
const calls = [
  { callNumber: "555-555-5555", callTime: new Date(), iconType: "incoming" as const },
  // Add more calls as needed
];

const ActivityFeed: React.FC = () => {
  return (
    <div className="relative mt-12 flex flex-col">
      {calls.map((call, index) => (
        <ActivityItem key={index} call={call} />
      ))}
    </div>
  );
};

export default ActivityFeed;
