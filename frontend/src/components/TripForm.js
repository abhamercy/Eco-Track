
import React, { useState } from 'react';
import axios from 'axios';

const TripForm = () => {
  const [distance, setDistance] = useState('');
  const [cost, setCost] = useState('');
  const [vehicleModelId, setVehicleModelId] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const vehicleOptions = [
    { name: "Honda Civic", id: "b09702ff-92d5-4982-9982-19eff5e71ced" },
    { name: "Honda Accord", id: "bad08bd1-b513-4c51-9ee1-027776d9b1d7" },

  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/log', {
        activity_type: 'transport',
        description: 'Vehicle trip',
        distance_mi: Number(distance),
        vehicle_model_id: vehicleModelId,
        cost_usd: Number(cost)
      });
      setSuccessMsg('Trip logged successfully!');
    } catch (err) {
      console.error(err);
      setSuccessMsg('Error logging trip.');
    }
  };

  return (
    <div>
      <h2>Log a Vehicle Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Distance (mi):<br />
          <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} required />
        </label>
        <br /><br />
        <label>
          Cost ($):<br />
          <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} required />
        </label>
        <br /><br />
        <label>
          Vehicle Model:<br />
          <select value={vehicleModelId} onChange={(e) => setVehicleModelId(e.target.value)} required>
            <option value="">Select a vehicle</option>
            {vehicleOptions.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </label>
        <br /><br />
        <button type="submit">Log Trip</button>
      </form>
      <p>{successMsg}</p>
    </div>
  );
};

export default TripForm;
