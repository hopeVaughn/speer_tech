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
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedCalls, setSelectedCalls] = useState<string[]>([]);

  const handleButtonClick = async (actionType: string) => {
    const urlBase = `${import.meta.env.VITE_DATABASE_URL_DEV}/`;
    let endpoint;

    try {
      // Check whether checkboxes are enabled
      if (showCheckboxes) {
        // Check whether only one call is selected
        if (selectedCalls.length === 1) {
          // Use the single call endpoints
          endpoint = actionType === 'archive' ? 'archive' : 'unarchive';
          await axios.put(`${urlBase}${selectedCalls[0]}/${endpoint}`);
        } else {
          // Use the selected calls endpoints
          endpoint = actionType === 'archive' ? 'archiveSelected' : 'unarchiveSelected';
          await axios.put(`${urlBase}${endpoint}`, { ids: selectedCalls });
        }
      } else {
        // Use the all calls endpoints
        endpoint = actionType === 'archive' ? 'archiveAll' : 'unarchiveAll';
        await axios.put(`${urlBase}${endpoint}`);
      }

      // Fetch the updated list of calls
      const response = await axios.get(urlBase);
      const allCalls = response.data;
      setCalls(allCalls);
      setArchivedCalls(allCalls.filter((call: CallProps) => call.is_archived));
      setActiveCalls(allCalls.filter((call: CallProps) => !call.is_archived));
      setSelectedCalls([]);  // Clear the selected calls
    } catch (error) {
      console.error(`Error ${actionType}ing calls:`, error);
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
        <Header setShowCheckboxes={setShowCheckboxes} />
        <main className="flex-grow">
          <Routes>
            <Route path="/archive" element={<ArchivedPage calls={archivedCalls} handleButtonClick={handleButtonClick} showCheckboxes={showCheckboxes} setSelectedCalls={setSelectedCalls} />} />
            <Route path="/" element={<ActiveCalls calls={activeCalls} handleButtonClick={handleButtonClick} showCheckboxes={showCheckboxes} setSelectedCalls={setSelectedCalls} />} />
            <Route path="detail/:id" element={<ActivityDetail />} />
          </Routes>
        </main>
        <BottomNav />
      </Router>
    </div>
  );
};

export default App;
