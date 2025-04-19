import React from 'react';
import DataEntryForm from '../components/DataEntryForm';

function DataEntry() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Log an Activity</h2>
      <p>Enter activity details below</p>
      <DataEntryForm />
    </div>
  );
}

export default DataEntry;
