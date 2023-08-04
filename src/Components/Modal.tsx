import React from 'react';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';

interface ModalProps {
  from: string,
  created_at: string,
  direction: string,
  callType: string,
  duration: number,
  isArchived: boolean,
  handleClose: () => void,
}

const Modal: React.FC<ModalProps> = ({ from, created_at, direction, callType, duration, isArchived, handleClose }) => {
  const iconSize = 24;
  const iconType = direction === 'inbound' ? 'incoming' : 'outgoing';

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" onClick={handleClose}> {/* Added onClick here */}
      <main className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Added onClick handler to stop propagation */}
        <article className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={(e) => e.stopPropagation()}>
          <section className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="p-4 rounded-lg shadow-md w-3/5 bg-white mx-auto">
              <header className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                  {iconType === 'incoming' ?
                    <VscCallIncoming size={iconSize} color={callType === 'missed' ? 'red' : 'black'} /> :
                    <VscCallOutgoing size={iconSize} color={callType === 'missed' ? 'red' : 'black'} />}
                  <span className="font-bold text-lg ml-2 sm:ml-4">{from}</span>
                </div>
              </header>
              <div className="mt-4">
                <p>Duration: {duration} seconds</p>
                <p>Archived: {isArchived ? 'Yes' : 'No'}</p>
              </div>
              <div className="text-sm text-gray-600 sm:mt-0 mt-2">
                {new Date(created_at).toLocaleTimeString()}
              </div>
            </div>
          </section>
          <footer className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
              Close
            </button>
          </footer>
        </article>
      </main>
    </div>
  );

};

export default Modal;
