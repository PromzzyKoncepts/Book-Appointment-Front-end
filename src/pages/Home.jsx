import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../components/Car';
// import { useNavigate } from 'react-router-dom';
// import settings from '../components/Carousel';
import { allCars, fetchCars } from '../redux/cars/carsSlice';

const Home = () => {
  const cars = useSelector(allCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

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
