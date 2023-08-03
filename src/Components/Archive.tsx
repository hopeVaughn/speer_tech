import React from 'react';
import { VscArchive } from 'react-icons/vsc';

const Archive: React.FC = () => {
  return (
    <section className="rounded-b-lg min-w-[16rem] max-w-[16rem] h-12 mx-auto flex justify-center items-center bg-white shadow-md px-4 py-1 mt-2">
      <button className="flex flex-row justify-center items-center w-full text-center">
        <VscArchive size={24} className="mr-2 hover:text-custom-green cursor-pointer" />
        <span className="text-xs">Archive all messages</span>
      </button>
    </section>
  );
};

export default Archive;
