import React from 'react';

const Reservations = ({ username, reservations }) => {
  return (
    <div>
      <h1>My reservations</h1>
      <p>Username: {username}</p>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.item} on {reservation.date} in {reservation.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
