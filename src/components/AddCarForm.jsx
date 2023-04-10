/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCar } from '../redux/cars/carsSlice';
import {
  Form, FormBtn, Textarea, FormDiv, H1, Input,
} from '../Styles';

const AddCarForm = () => {
  const [carData, setCardata] = useState({
    name: '',
    model: '',
    price: 0,
    image_url: '',
    description: '',
    user_id: 1,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    name, model, price, image_url, description,
  } = carData;

  const handleClear = () => {
    setCardata({
      ...carData,
      name: '',
      model: '',
      price: 0,
      image_url: '',
      description: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createCar({ carData, navigate, toast }));
    handleClear();
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCardata({ ...carData, [name]: value });
  };

  return (
    <FormDiv>
      <Form onSubmit={handleSubmit}>
        <H1>Add a car</H1>
        <Input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={onInputChange}
          className="form-control"
          name="name"
          required
        />
        <Input
          type="text"
          placeholder="Enter car model"
          value={model}
          onChange={onInputChange}
          className="form-control"
          name="model"
          required
        />
        <Input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={onInputChange}
          className="form-control"
          name="price"
          required
        />

        <Input
          type="text"
          placeholder="Enter Image URL"
          value={image_url}
          onChange={onInputChange}
          className="form-control"
          name="image_url"
          required
        />

        <Textarea
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={onInputChange}
          className="form-control"
          name="description"
          required
        />
        <FormBtn type="submit">Add Car</FormBtn>
      </Form>
    </FormDiv>
  );
};

export default AddCarForm;
