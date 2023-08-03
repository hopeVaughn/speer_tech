import React from 'react';
import Header from './Components/Header';

const App: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="container flex-grow">Some activities should be here</div>
    </div>
  );
};

export default App;
