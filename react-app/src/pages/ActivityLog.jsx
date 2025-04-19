import React from 'react';
import ActivityLog from '../components/ActivityLogTable.jsx';

function DataTable() {
  const mockData = [
    { activity: 'Meal', date: '2025-04-18', time: '08:00 AM' },
    { activity: 'Nap', date: '2025-04-18', time: '10:30 AM'}
  ];
    
  return (
      <div style={{ padding: '2rem' }}>
        <h2>Activity History</h2>
        <p>View your puppy's previous activities</p>
        <ActivityLog data={mockData} />
      </div>
  );
}
  
export default DataTable;