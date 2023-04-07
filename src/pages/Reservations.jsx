import React from 'react';
import PropTypes from 'prop-types';

const Reservations = (props) => {
  const { reservations } = props;

  return (
    <div>
      <h2>Reservations</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>
            Reservation ID:
            {reservation.id}
          </p>
          <p>
            Start Date:
            {reservation.startDate}
          </p>
          <p>
            Return Date:
            {reservation.returnDate}
          </p>
        </div>
      ))}
    </div>
  );
};

Reservations.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      returnDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reservations;
