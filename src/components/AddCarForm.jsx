/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createCar } from '../redux/cars/carsSlice';

const AddCarForm = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (car) => {
    console.log(car);
    // JSON.stringify(car);
    const updatedCarData = { ...car, user_id: 1 };
    dispatch(createCar({ updatedCarData, toast }));
  };

  return (
    <form className="add-car-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Car Name" {...register('name', { required: true, mainLength: 3 })} />
      <input type="text" placeholder="Car Model" {...register('model', { required: true, mainLength: 3 })} />
      <input type="number" placeholder="Price" {...register('price', { required: true })} />
      <input type="text" placeholder="Image url" {...register('image_url')} />
      <textarea type="text" placeholder="Description" {...register('description', { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default AddCarForm;
