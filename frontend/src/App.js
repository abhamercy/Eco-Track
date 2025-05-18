import React, { useState } from 'react';
import './App.css';
import TripForm from './components/TripForm';
import TripChart from './components/TripChart';
import TripList from './components/TripList';

function App() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="App">
      <h1 style={{
  textAlign: 'center',
  marginBottom: '3rem',
  fontSize: '2.8rem',
  color: '#2F3E1B'
}}>
  EcoTrack
</h1>

      <div className="dashboard-layout">
        <div className="form-column">
          <TripForm />
        </div>

        <div className="chart-column">
          <TripChart />
          <button
            onClick={() => setShowTable(!showTable)}
            style={{
              marginTop: '2rem',
              backgroundColor: '#556B2F',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {showTable ? 'Hide Trip Logs' : 'View Trip Logs'}
          </button>

          {showTable && (
            <div className="table-column" style={{ marginTop: '1.5rem' }}>
              <TripList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
