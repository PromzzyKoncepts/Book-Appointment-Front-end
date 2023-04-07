import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Reserve = ({ username, selectedItem }) => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the reservation data to your backend or do any other necessary logic
    console.log(`Reservation for ${selectedItem} on ${date} in ${city} made by ${username}`);
  };

  return (
    <div>
      <h1>
        Reserve
        {selectedItem}
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">
          Date:
          <input id="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <br />
        <label htmlFor="city">
          City:
          <input id="city" type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

Reserve.propTypes = {
  username: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

export default Reserve;
