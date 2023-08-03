import React from 'react'
import { CallProps } from '../utils/propTypes'
const ActivityFeed: React.FC<CallProps> = () => {
  return (
    <div className="relative mt-12">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center divide-y divide-dotted">
        <span className="bg-white px-2 text-sm text-gray-500">Date of Activity</span>
      </div>
    </div>
  )
}

export default ActivityFeed