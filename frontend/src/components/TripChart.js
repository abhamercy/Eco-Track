
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const TripChart = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/logs');
        setLogs(res.data);
      } catch (err) {
        console.error("Error fetching logs", err);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div style={{ marginTop: '3rem' }}>
      <h2>Carbon Emissions per Trip</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={logs} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
          <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="carbon_kg" stroke="#6A8E3F" fill="#556B2F" name="CO₂ (kg)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TripChart;
