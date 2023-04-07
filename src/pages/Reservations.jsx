import React from 'react';

const Reservations = ({ reservations }) => {
  if (!reservations || reservations.length === 0) {
    return <p>You have no reservations</p>;
  }

  return (
    <ul>
      {reservations.map((reservation) => (
        <li key={reservation.id}>
          <p>{reservation.itemName}</p>
          <p>{reservation.date}</p>
          <p>{reservation.city}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reservations;
