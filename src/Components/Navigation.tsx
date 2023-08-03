import React from 'react';
import { Link } from 'react-router-dom';
import { VscSettings } from "react-icons/vsc";

const Navigation: React.FC = () => {
  return (
    <nav className="w-3/4 md:w-5/6 lg:w-7/8 flex justify-around items-center">
      <Link to="/inbox" className="text-lg text-gray-600 hover:text-custom-green">Inbox</Link>
      <Link to="/all-calls" className="text-lg text-gray-600 hover:text-custom-green">All Calls</Link>
      <Link to="/settings" className="text-lg text-gray-600 hover:text-custom-green">
        <VscSettings size={36} />
      </Link>
    </nav>
  );
};

export default Navigation;
