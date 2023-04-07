import React, { useState } from 'react';

const Reserve = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the reservation data to your backend or do any other necessary logic
    console.log(`Reservation for ${name} from ${pickupDate} to ${returnDate}`);
  };

  return (
    <div className="reservation-form">
      <form onSubmit={handleSubmit}>
        <h2>Make a Reservation</h2>
        <div className="form-group">
          <label htmlFor="pickup-date">Pickup Date:</label>
          <input type="date" id="pickup-date" value={pickupDate} onChange={(event) => setPickupDate(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="return-date">Return Date:</label>
          <input type="date" id="return-date" value={returnDate} onChange={(event) => setReturnDate(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default Reserve;
