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

const Book = () => {
  const cars = useSelector(allCars);
  const selectedCarId = useSelector((state) => state.cars.carId);
  const selectedCarArr = cars.filter((car) => car.id === selectedCarId);

  const carObject = { ...selectedCarArr };

  const currentUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserData?.user;

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const [reservationData, setreservationData] = useState({
    pickup_date: pickupDate,
    return_date: returnDate,
    city: '',
    user_id: currentUser?.id,
    car_id: selectedCarId,
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createReservation({ reservationData, navigate, toast }));
    handleClear();
  };

  return (
    <FormDiv>
      <Form onSubmit={handleSubmit}>
        <H1>Book a car</H1>
        <Input type="text" name={currentUser?.name} placeholder="user" aria-label="name" disabled value={currentUser?.name} readOnly />
        <Input type="text" name={carObject[0]?.name} placeholder="car name" aria-label="car name" disabled value={carObject[0]?.name} readOnly />
        <DatePicker className="select-car" onChange={setPickupDate} value={pickupDate} />
        <DatePicker className="select-car" onChange={setReturnDate} value={returnDate} />
        <Input type="text" aria-label="city" placeholder="Add your city" name="city" value={city} onChange={onInputChange} required />
        <FormBtn type="submit">Reserve Now</FormBtn>
      </Form>
    </FormDiv>
  );
};

export default Book;
