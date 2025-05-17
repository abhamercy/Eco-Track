import React from 'react';
import './App.css';
import TripForm from './components/TripForm';
import TripList from './components/TripList';

function App() {
  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>EcoTrack: Log Your Trip</h1>
      <TripForm />
      <TripList />
    </div>
  );
}

export default App;
