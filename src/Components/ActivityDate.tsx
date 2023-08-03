import React from 'react';

interface ActivityDateProps {
  date: Date;
}

const ActivityDate: React.FC<ActivityDateProps> = ({ date }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-500" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500">
          {date.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default ActivityDate;
