import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import {
  isLoading, isReserved, fetchReservations, removeReservation,
} from '../redux/reservations/reservationsSlice';
import { allCars } from '../redux/cars/carsSlice';
import Spinner from '../components/Spinner';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.allReservations);
  const cars = useSelector(allCars);

  const dispatch = useDispatch();

  const loading = useSelector(isLoading);
  const currentUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserData?.user;
  const userReservations = reservations.filter(
    (reservation) => reservation.user_id === currentUser.id,
  );

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleDelete = (id) => {
    const reserved = false;
    dispatch(isReserved(reserved));
    dispatch(removeReservation({ id, toast }));
  };

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
              <th>Name</th>
              <th>City</th>
              <th>Pickup Date</th>
              <th>Return Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(userReservations) && userReservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{cars.find((car) => car.id === reservation.car_id)?.name}</td>
                <td>{reservation.city}</td>
                <td>{reservation.pickup_date}</td>
                <td>{reservation.return_date}</td>
                {/* eslint-disable-next-line */}
                <td><button type="button" value="Delete" className="delete-reservation" onClick={() => handleDelete(reservation.id)}><DeleteIcon /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reservations;
