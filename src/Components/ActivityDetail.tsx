import React from 'react';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';

interface IconTypeProps {
  incoming: 'incoming',
  outgoing: 'outgoing',
}

interface ActivityComponentProps {
  callNumber: string;
  callTime: Date;
  iconType: keyof IconTypeProps;
  callType?: string;
}

const ActivityDetail: React.FC<ActivityComponentProps> = ({
  callNumber,
  callTime,
  iconType,
  callType
}) => {
  const iconSize = 24;

  return (
    <div className="p-4 rounded-lg shadow-md w-3/5 bg-white mx-auto">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          {iconType === 'incoming' ?
            <VscCallIncoming size={iconSize} color={callType === 'missed' ? 'red' : undefined} /> :
            <VscCallOutgoing size={iconSize} color={callType === 'missed' ? 'red' : undefined} />}
          <span className="font-bold text-lg ml-2 sm:ml-4">{callNumber}</span>
        </div>
        <div className="text-sm text-gray-600 sm:mt-0 mt-2">
          {callTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
