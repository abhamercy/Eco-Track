
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TripList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/logs');
        setLogs(res.data);
      } catch (err) {
        console.error("Failed to fetch logs", err);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Your Trip Logs</h2>
      {logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity Type</th>
              <th>Description</th>
              <th>Carbon (kg)</th>
              <th>Cost ($)</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.activity_type}</td>
                <td>{log.description}</td>
                <td>{log.carbon_kg}</td>
                <td>{log.cost_usd}</td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TripList;

