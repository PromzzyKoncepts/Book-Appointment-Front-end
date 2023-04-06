import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../components/Car';
import Spinner from '../components/Spinner';
import { allCars, fetchCars, isLoading } from '../redux/cars/carsSlice';

const Home = () => {
  const cars = useSelector(allCars);
  console.log(cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="home-container">
      <h1>Available Cars To book</h1>
      <h5>Please select the car model you wish to book</h5>
      <div className="cards-container">
        <Car cars={cars} />
      </div>
    </div>
  );
};

export default Home;
