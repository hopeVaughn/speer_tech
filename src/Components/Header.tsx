import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
interface HeaderProps {
  setShowCheckboxes: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({ setShowCheckboxes }) => {
  return (
    <header className="flex justify-between items-center px-5 py-1 md:py-2 lg:py-3 xl:py-4 2xl:py-5 shadow-md">
      <Logo />
      <Navigation setShowCheckboxes={setShowCheckboxes} />
    </header>
  );
};

export default Header;
