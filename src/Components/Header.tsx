import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-5 py-1 md:py-2 lg:py-3 xl:py-4 2xl:py-5 shadow-md">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
