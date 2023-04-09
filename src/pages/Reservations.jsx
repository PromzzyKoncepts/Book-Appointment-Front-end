import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, fetchReservations } from '../redux/reservations/reservationsSlice';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.allReservations);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="my-reservations-container">
      <h2>My Reservations</h2>
      {reservations?.length === 0 ? (
        <p>You do not have any reservations yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Pickup Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(reservations) && reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.city}</td>
                <td>{reservation.pickup_date}</td>
                <td>{reservation.return_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reservations;
