import React, { useState } from 'react';

const ReservePage = ({ username, selectedItem }) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the reservation data to your backend or do any other necessary logic
    console.log(`Reservation for ${selectedItem} on ${date} in ${city} made by ${username}`);
  };

  return (
    <div>
      <h1>Reserve {selectedItem}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservePage;