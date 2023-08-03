import React from 'react';

import Header from './Header.jsx';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};


export default App;
