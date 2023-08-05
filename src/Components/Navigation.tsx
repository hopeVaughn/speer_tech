import React from 'react';
import { Link } from 'react-router-dom';
import { VscSettings } from "react-icons/vsc";

interface NavigationProps {
  setShowCheckboxes: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ setShowCheckboxes }) => {
  const handleClick = () => {
    setShowCheckboxes(prev => !prev); // toggle the state
  };

  return (
    <nav className="w-3/4 md:w-5/6 lg:w-7/8 flex justify-around items-center">
      <Link to="/archive" className="text-lg text-gray-600 hover:text-custom-green">Archived</Link>
      <Link to="/" className="text-lg text-gray-600 hover:text-custom-green">All Calls</Link>
      <button onClick={handleClick} className="text-lg text-gray-600 hover:text-custom-green">
        <VscSettings size={36} />
      </button>
    </nav>
  );
};

export default Navigation;
