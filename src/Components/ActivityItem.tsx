import React from 'react';
import ActivityDate from './ActivityDate';
import { CallProps } from '../utils/propTypes';
import { Link } from 'react-router-dom';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';

interface ActivityItemProps {
  data: CallProps[];
  onlyArchived: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ data, onlyArchived }) => {
  const iconSize = 24;
  return (
    <main>
      {data.filter(call => call.is_archived === onlyArchived).map((call) => {
        const callTime = new Date(call.created_at);
        const callType = call.call_type;
        const iconType = call.direction === 'inbound' ? 'incoming' : 'outgoing';
        const callNumber = call.from;

        return (
          <article className="flex flex-col p-4" key={call.id}>
            <ActivityDate date={callTime} />
            <section className="p-4 rounded-lg shadow-md w-3/5 bg-white mx-auto">
              <Link to={`/detail/${call.id}`} key={call.id}>
                <header className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                  <div className="flex items-center mb-2 sm:mb-0">
                    {iconType === 'incoming' ?
                      <VscCallIncoming size={iconSize} color={callType === 'missed' ? 'red' : undefined} /> :
                      <VscCallOutgoing size={iconSize} color={callType === 'missed' ? 'red' : undefined} />}
                    <span className="font-bold text-lg ml-2 sm:ml-4">{callNumber}</span>
                  </div>
                  <div className="text-sm text-gray-600 sm:mt-0 mt-2">
                    {callTime.toLocaleTimeString()}
                  </div>
                </header>
              </Link>
            </section>
          </article>
        );
      })}
    </main>
  );
};

export default ActivityItem;
