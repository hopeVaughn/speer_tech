import React from 'react'
import { CallProps } from '../utils/propTypes'
import { VscArchive } from 'react-icons/vsc'

const Archive: React.FC<CallProps> = () => {
  return (
    <div className="rounded-b-lg w-3/5 h-12 mx-auto flex justify-center items-center bg-white shadow-md px-4 py-1 mt-2">
      <div className="flex justify-center items-center w-full">
        <VscArchive size={24} className="mr-16 hover:text-custom-green cursor-pointer" />
        <span>Archive all messages</span>
      </div>
    </div>
  )
}

export default Archive
