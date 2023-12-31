import React from 'react';
import { AiOutlinePhone, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { FaVoicemail } from 'react-icons/fa';
import { IoMdKeypad } from 'react-icons/io';
import { callData } from '../utils/data';

const BottomNav: React.FC = () => {
  const totalMissedCalls = callData.filter((call) => call.is_archived === false && call.direction === 'inbound' && call.call_type === 'missed').length;
  const totalVoicemails = callData.filter((call) => call.is_archived === false && call.direction === 'inbound' && call.call_type === 'voicemail').length;

  return (
    <nav className="fixed inset-x-0 bottom-0 h-16 bg-light-custom-pink shadow-md flex items-center justify-around rounded-tl-3xl rounded-tr-3xl">
      <section className="relative bg-custom-peach rounded-full p-2 shadow-lg">
        <button className="flex flex-col items-center">
          <AiOutlinePhone size={24} className='text-gray-600 hover:text-custom-green' />
          <span className="absolute text-red-600 top-[-6px] right-[-8px] text-xs">{totalMissedCalls}</span>
        </button>
      </section>
      <section className="bg-custom-peach rounded-full p-2 shadow-lg">
        <button className="flex flex-col items-center">
          <AiOutlineUser size={24} className='text-gray-600 hover:text-custom-green' />
        </button>
      </section>
      <section className="relative flex flex-col items-center transform -translate-y-14">
        <div className="w-20 h-20 bg-white rounded-full absolute z-10 flex items-center justify-center">
          <button className="flex flex-col items-center rounded-full p-3 shadow-lg bg-light-custom-green z-20">
            <IoMdKeypad size={44} className=" text-gray-600 hover:text-custom-green" />
          </button>
        </div>
      </section>
      <section className="bg-custom-peach rounded-full p-2 shadow-lg">
        <button className="flex flex-col items-center">
          <AiOutlineSetting size={24} className='text-gray-600 hover:text-custom-green' />
        </button>
      </section>
      <section className="relative bg-custom-peach rounded-full p-2 shadow-lg">
        <button className="flex flex-col items-center">
          <FaVoicemail size={24} className=" text-gray-600 hover:text-custom-green" />
          <span className="absolute text-red-600 top-[-6px] right-[-8px] text-xs z-10">{totalVoicemails}</span>
        </button>
      </section>
    </nav>
  );
};

export default BottomNav;
