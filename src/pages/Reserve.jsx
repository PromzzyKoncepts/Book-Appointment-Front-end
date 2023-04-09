import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { allCars } from '../redux/cars/carsSlice'
import { createReservation } from '../redux/reservations/reservationsSlice';

const Reserve = () => {
  const cars = useSelector(allCars);

  const currentUserData = localStorage.getItem('user');
  const currentUser = currentUserData.user;

  const [reservationData, setreservationData] = useState({
    pickup_date: '',
    return_date: '',
    city: '',
    user_id: 0,
    car_id: 0,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    pickup_date, return_date, city, car_id } = reservationData;

  const handleClear = () => {
    setreservationData({
      ...reservationData,
      pickup_date: '',
      return_date: '',
      city: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createReservation({ reservationData, navigate, toast }));
    handleClear();
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setreservationData({ ...reservationData, [name]: value });
  };

  return (
    <div className="reserve-container">
      <h2>Reserve</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" aria-label="name" value={currentUser.name} readOnly />
        </label>
        <br />
        <div>
        <select
          className="form-control"
          aria-label="Select label"
          name="car"
          onChange={onInputChange}>
          <option value="choose" disabled selected="selected">
            -- Select a car --
          </option>
          { Array.isArray(cars) && cars?.map((car) => (
            <option name="car" value={car_id}>
              {car.id} 
            </option>
          ))}
        </select>
      </div>
        <br />
        <label>
          Start date:
          <input type="date" aria-label="date" name="date" value={pickup_date} onChange={onInputChange} required />
        </label>
        <label>
          End date:
          <input type="date" aria-label="date" name="date" value={return_date} onChange={onInputChange} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" aria-label="city" name="city" value={city} onChange={onInputChange} required />
        </label>
        <br />
        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default Reserve;
