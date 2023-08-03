import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ActivityFeed from './Components/ActivityFeed';
import ActivityDetail from './Components/ActivityDetail';
import Archive from './Components/Archive';

const App: React.FC = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    // Fetch data from API and set state
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Router>
        <Header />
        <main className="flex-grow">
          <Archive calls={calls} />
          <Routes>
            <Route path="/" element={<ActivityFeed calls={calls} />} />
            <Route path="archive" element={<Archive calls={calls} />} />
            <Route path="detail/:id" element={<ActivityDetail calls={calls} />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
