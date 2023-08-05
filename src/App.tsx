import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import ActiveCalls from './Components/ActiveCalls';
import ActivityDetail from './Components/ActivityDetail';
import ArchivedPage from './Components/ArchivedPage';
import BottomNav from './Components/BottomNav';
import { CallProps } from './utils/propTypes';

const App: React.FC = () => {
  const [calls, setCalls] = useState<CallProps[]>([]);
  const [archivedCalls, setArchivedCalls] = useState<CallProps[]>([]);
  const [activeCalls, setActiveCalls] = useState<CallProps[]>([]);

  const handleButtonClick = async (tabType: string) => {
    const url = `${import.meta.env.VITE_DATABASE_URL_DEV}/${tabType === 'archive' ? 'archiveAll' : 'unarchiveAll'}`;
    try {
      const response = await axios.put(url);
      console.log(url);
      const updatedCalls = response.data;
      setCalls(updatedCalls);
      setArchivedCalls(updatedCalls.filter((call: CallProps) => call.is_archived));
      setActiveCalls(updatedCalls.filter((call: CallProps) => !call.is_archived));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_DATABASE_URL_DEV}`);
        const allCalls = response.data;
        setCalls(allCalls);
        setArchivedCalls(allCalls.filter((call: CallProps) => call.is_archived));
        setActiveCalls(allCalls.filter((call: CallProps) => !call.is_archived));
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(`Total calls: ${calls.length}`);
    console.log(`Archived calls: ${archivedCalls.length}`);
    console.log(`Active calls: ${activeCalls.length}`);
  }, [calls, archivedCalls, activeCalls]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/archive" element={<ArchivedPage calls={archivedCalls} handleButtonClick={handleButtonClick} />} />
            <Route path="/" element={<ActiveCalls calls={activeCalls} handleButtonClick={handleButtonClick} />} />
            <Route path="detail/:id" element={<ActivityDetail />} />
          </Routes>
        </main>
        <BottomNav />
      </Router>
    </div>
  );
};

export default App;
