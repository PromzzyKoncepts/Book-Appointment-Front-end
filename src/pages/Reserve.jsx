/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { toast } from 'react-toastify';
import { allCars, getCarId, updateReserved } from '../redux/cars/carsSlice';
import { createReservation } from '../redux/reservations/reservationsSlice';
import {
  Form, FormBtn, FormDiv, H1, Input, Label,
} from '../Styles';

const Reserve = () => {
  const cars = useSelector(allCars);

  const currentUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserData?.user;

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [carId, setCarId] = useState(1);

  const [reservationData, setreservationData] = useState({
    pickup_date: pickupDate,
    return_date: returnDate,
    city: '',
    user_id: currentUser?.id,
    car_id: carId,
  });

  const carToUpdate = cars.find((car) => car.id === carId);

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

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setreservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleCarIdChange = (e) => {
    setCarId(e.target.value);
    dispatch(getCarId(carId));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCarData = { ...carToUpdate, reserved: true };
    dispatch(updateReserved({ updatedCarData, carId }));
    dispatch(createReservation({ reservationData, navigate, toast }));
    handleClear();
  };

  return (
    <>
      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <H1>Reserve</H1>
          <Input type="text" disabled name={currentUser?.name} placeholder="user" aria-label="name" value={currentUser?.name} readOnly />
          <select
            aria-label="Select label"
            value={carId}
            className="select-car"
            onChange={handleCarIdChange}
          >
            {Array.isArray(cars) && cars?.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name}
              </option>
            ))}
          </select>
          <Label>Enter start-up date</Label>
          <DatePicker className="select-car" onChange={setPickupDate} value={pickupDate} />
          <Label>Enter Return date</Label>
          <DatePicker className="select-car" onChange={setReturnDate} value={returnDate} />
          <Label>Enter your city</Label>
          <Input type="text" aria-label="city" name="city" value={city} onChange={onInputChange} required />
          <FormBtn type="submit">Reserve Now</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Reserve;
