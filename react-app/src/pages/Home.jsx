import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Your PuppyPlanner 🐶</h1>
      <p><Link to="/dataentry">Log a new activity</Link></p>
      <p><Link to="/viewdata">View past entries</Link></p>
    </div>
  );
}

export default Home;
