import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../components/Car';
import Spinner from '../components/Spinner';
import { allCars, fetchCars, isLoading } from '../redux/cars/carsSlice';

const Home = () => {
  const cars = useSelector(allCars);
  const loading = useSelector(isLoading);
  console.log(loading);

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
          cars && cars?.length <= 2
            ? (
              <div className="caroussel_row">
                {
                cars?.map((car, i) => <Car key={i} {...car} />)
              }
              </div>
            ) : (
              <Slider {...settings}>
                {
                cars?.map((car, i) => <Car key={i} {...car} />)
              }
              </Slider>
            )
        }
      </div>
    </div>
  );
};

export default Home;
