import React from 'react';
import { AiOutlinePhone, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { FaVoicemail } from 'react-icons/fa';
import { IoMdKeypad } from 'react-icons/io';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 h-16 bg-white shadow-md flex items-center justify-around">
      <figure className="flex flex-col items-center relative">
        <AiOutlinePhone size={24} className='text-gray-600 hover:text-custom-green' />
        <figcaption className="absolute text-red-600 top-[-6px] right-[-8px] text-xs">2</figcaption>
      </figure>
      <button className="flex flex-col items-center">
        <AiOutlineUser size={24} className='text-gray-600 hover:text-custom-green' />
      </button>
      <button className="flex flex-col items-center">
        <IoMdKeypad size={36} className=" text-gray-600 hover:text-custom-green" />
      </button>
      <button className="flex flex-col items-center">
        <AiOutlineSetting size={24} className='text-gray-600 hover:text-custom-green' />
      </button>
      <button className="flex flex-col items-center">
        <FaVoicemail size={24} className=" text-gray-600 hover:text-custom-green" />
      </button>
    </nav>
  );
};

export default BottomNav;
