/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createCar } from '../redux/cars/carsSlice';

const AddCarForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (car) => {
    const updatedCarData = { ...car, user_id: 1 };
    dispatch(createCar({ updatedCarData, navigate, toast }));
  };

  return (
    <section className="form-page">
      <form className="add-car-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" aria-label="name" placeholder="Car Name" {...register('name', { required: true, mainLength: 3 })} />
        <input type="text" aria-label="model" placeholder="Car Model" {...register('model', { required: true, mainLength: 3 })} />
        <input type="number" aria-label="Price" placeholder="Price" {...register('price', { required: true })} />
        <input type="text" aria-label="image" placeholder="Image url" {...register('image_url')} />
        <textarea type="text" placeholder="Description" {...register('description', { required: true })} />
        <button type="submit">Add Car</button>
      </form>
    </section>
  );
};

export default AddCarForm;
