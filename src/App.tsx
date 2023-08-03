import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import AllCalls from './Components/AllCalls';
import ActivityDetail from './Components/ActivityDetail';
import ArchivedPage from './Components/ArchivedPage';
import BottomNav from './Components/BottomNav';

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
          <Routes>
            <Route path="/archive" element={<ArchivedPage calls={calls} />} />
            <Route path="/" element={<AllCalls calls={calls} />} />
            <Route path="detail/:id" element={<ActivityDetail calls={calls} />} />
          </Routes>
        </main>
        <BottomNav />
      </Router>
    </div>
  );
};

export default App;
