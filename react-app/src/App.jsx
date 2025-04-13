import React from 'react';
import DataEntryForm from './components/DataEntryForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>PuppyPlanner</h1>
      <p>Enter your puppy's activity data below.</p>
      <DataEntryForm />
    </div>
  );
}

export default App; 
