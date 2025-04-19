import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import DataEntry from './pages/DataEntry';
import DataTable from './pages/ActivityLog';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/dataentry" style={{ marginRight: '1rem' }}>Log Activity</Link>
        <Link to="/viewdata" style={{marginRight: '1rem'}}>View Activity History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataentry" element={<DataEntry />} />
        <Route path="/viewdata" element={<DataTable />} />
      </Routes>
    </Router>
  );
}

export default App; 
