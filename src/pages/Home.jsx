/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import Car from '../components/Car';
import Spinner from '../components/Spinner';
import settings from '../components/Carousel';
import { allCars, fetchCars, isLoading } from '../redux/cars/carsSlice';

const Home = () => {
  const cars = useSelector(allCars);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading === 'loading') {
    return (
      <Spinner />
    );
  }

  return (
    <div className="home-container">
      <h1>Available Cars To book</h1>
      <h5>Please select the car model you wish to book</h5>
      <div className="cards-container">
        {
          Array.isArray(cars) && cars?.length <= 2
            ? (
              <div className="caroussel_row">
                {
                Array.isArray(cars) && cars?.map((car) => <Car key={car.id} {...car} />)
              }
              </div>
            ) : (
              <Slider {...settings}>
                {
                Array.isArray(cars) && cars?.map((car) => <Car key={car.id} {...car} />)
              }
              </Slider>
            )
        }
      </div>
    </div>
  );
};

export default Home;
