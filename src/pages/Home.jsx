import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../components/Car';
// import { useNavigate } from 'react-router-dom';
// import settings from '../components/Carousel';
import { allCars, fetchCars } from '../redux/cars/carsSlice';

const Home = () => {
  const cars = useSelector(allCars);
  console.log(cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <h5>For the best, luxurious and comfortable rides, look no further</h5>
      <div className="cards-container">
        <Car cars={cars} />
      </div>
    </div>
  );
};

export default Home;
