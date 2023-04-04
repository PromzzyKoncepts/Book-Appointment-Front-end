import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import settings from '../components/Carousel';
import { allCars, isLoading } from '../redux/cars/carsSlice';

const Home = () => {
  const cars = useSelector(allCars);
  console(cars);
  return (
    <div>Home</div>
  );
};

export default Home;