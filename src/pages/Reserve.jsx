import React, { useState } from 'react';

const Reserve = ({ username, selected }) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can write the logic to save the reservation details to a database or API
  };

  return (
    <div className="reserve-container">
      <h2>Reserve</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} readOnly />
        </label>
        <br />
        <label>
          Item:
          <input type="text" value={selected} readOnly />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} required />
        </label>
        <br />
        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default Reserve;

