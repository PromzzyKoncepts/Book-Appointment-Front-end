/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { toast } from 'react-toastify';
import { allCars } from '../redux/cars/carsSlice';
import { createReservation } from '../redux/reservations/reservationsSlice';
import {
  Form, FormBtn, FormDiv, H1, Input,
} from '../Styles';

const Reserve = () => {
  const cars = useSelector(allCars);

  const currentUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserData.user;

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [carId, setCarId] = useState(1);

  const [reservationData, setreservationData] = useState({
    pickup_date: pickupDate,
    return_date: returnDate,
    city: '',
    user_id: currentUser.id,
    car_id: carId,
  });

  console.log(carId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { city } = reservationData;

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

  const handleCarIdChange = (e) => {
    setCarId(e.target.value);
  };

  return (
    <FormDiv>
      <H1>Reserve</H1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name={currentUser.name} placeholder="user" aria-label="name" value={currentUser.name} readOnly />
        <select
          aria-label="Select label"
          value={carId}
          onChange={handleCarIdChange}
        >
          { Array.isArray(cars) && cars?.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name}
            </option>
          ))}
        </select>
        <DatePicker onChange={setPickupDate} value={pickupDate} />
        <DatePicker onChange={setReturnDate} value={returnDate} />
        <Input type="text" aria-label="city" name="city" value={city} onChange={onInputChange} required />
        <FormBtn type="submit">Reserve Now</FormBtn>
      </Form>
    </FormDiv>
  );
};

export default Reserve;
