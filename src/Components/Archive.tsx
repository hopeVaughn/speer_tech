import React from 'react';
import { VscArchive } from 'react-icons/vsc';
import { AiOutlineUpload } from 'react-icons/ai';

interface ArchiveProps {
  tabType: string;
  buttonText: string;
  handleButtonClick: (tabType: string) => void;
}

const Archive: React.FC<ArchiveProps> = ({ buttonText, tabType, handleButtonClick }) => {


  return (
    <section className="rounded-b-lg min-w-[16rem] max-w-[16rem] h-12 mx-auto flex justify-center items-center bg-white shadow-md px-4 py-1 mt-2">
      <button
        className="flex flex-row justify-center items-center w-full text-center"
        onClick={() => handleButtonClick(tabType)}
      >
        {tabType === 'archive' ?
          <VscArchive size={24} className="mr-2 hover:text-custom-green cursor-pointer" /> :
          <AiOutlineUpload size={24} className="mr-2 hover:text-custom-green cursor-pointer" />
        }
        <span className="text-xs">{buttonText}</span>
      </button>
    </section>
  );
};

export default Archive;
