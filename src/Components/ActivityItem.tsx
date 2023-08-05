import React from 'react';
import ActivityDate from './ActivityDate';
import { CallProps } from '../utils/propTypes';
import { Link } from 'react-router-dom';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';

interface ActivityItemProps {
  data: CallProps[];
  onlyArchived: boolean;
  showCheckboxes: boolean;
  setSelectedCalls: React.Dispatch<React.SetStateAction<string[]>>;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ data, onlyArchived, showCheckboxes, setSelectedCalls }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, callId: string) => {
    if (event.target.checked) {
      setSelectedCalls(prevSelectedCalls => [...prevSelectedCalls, callId]);
    } else {
      setSelectedCalls(prevSelectedCalls => prevSelectedCalls.filter(id => id !== callId));
    }
  };

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
            <section className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg shadow-md w-full sm:w-3/5 bg-white mx-auto">
              <Link to={`/detail/${call.id}`} key={call.id} className="flex-grow flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                <div className="flex flex-row justify-between sm:justify-start items-center mb-2 sm:mb-0 w-full">
                  <div className="flex items-center flex-grow">
                    {iconType === 'incoming' ?
                      <VscCallIncoming size={iconSize} color={callType === 'missed' ? 'red' : undefined} /> :
                      <VscCallOutgoing size={iconSize} color={callType === 'missed' ? 'red' : undefined} />}
                    <span className="font-bold text-lg ml-2 sm:ml-4">{callNumber}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2 sm:mt-0 sm:ml-4 self-center sm:self-auto">
                    {callTime.toLocaleTimeString()}
                  </div>
                  {showCheckboxes &&
                    <input
                      type="checkbox"
                      className="transform scale-125 mr-2 sm:mr-0 ml-4 sm:ml-4 self-center sm:self-auto"
                      onChange={(e) => handleCheckboxChange(e, call.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  }
                </div>
              </Link>
            </section>
          </article>
        );
      })}
    </main>
  );
};

export default ActivityItem;
