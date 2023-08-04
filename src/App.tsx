import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import AllCalls from './Components/AllCalls';
import ActivityDetail from './Components/ActivityDetail';
import ArchivedPage from './Components/ArchivedPage';
import BottomNav from './Components/BottomNav';
import { CallProps } from './utils/propTypes';
const App: React.FC = () => {
  const [calls, setCalls] = useState<CallProps | never[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/activities') // replace with your server's address
      .then(response => {
        setCalls(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
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
