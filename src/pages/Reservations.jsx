import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, fetchReservations } from '../redux/reservations/reservationsSlice';
import Spinner from '../components/Spinner';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.allReservations);
  const loading = useSelector(isLoading);
  const currentUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserData.user;
  const userReservations = reservations.filter(
    (reservation) => reservation.user_id === currentUser.id,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading === 'loading') {
    return (
      <Spinner />
    );
  }

  return (
    <div className="reservations-container">
      <h2>My Reservations</h2>
      {reservations?.length === 0 ? (
        <p>You do not have any reservations yet.</p>
      ) : (
        <table className="reservation-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Pickup Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(userReservations) && userReservations.map((reservation) => (
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
