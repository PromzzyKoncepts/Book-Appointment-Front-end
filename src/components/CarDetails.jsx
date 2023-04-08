import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCar, car } from '../redux/cars/carsSlice';

const CarDetails = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const carId = Number(id.id);
  const cardetails = useSelector(car);
  useEffect(() => {
    dispatch(fetchCar(carId));
  }, [dispatch]);

  return (
    <>
      <div className="car-container" key={cardetails.id}>
        <img src={cardetails.image_url} alt={cardetails.name} />
        <div className="car_details">
          <div className="car-header">
            <h2>{cardetails.name}</h2>
            <p>{cardetails.description}</p>
          </div>
          <div className="space-between fee">
            <p>Finance Fee</p>
            <p>$139</p>
          </div>
          <div className="space-between">
            <p>Option to purchase Fee</p>
            <p>$249</p>
          </div>
          <div className="space-between fee">
            <p>Total amount payable</p>
            <p>{cardetails.price}</p>
          </div>
          <div className="space-between">
            <p>Duration</p>
            <p>48 Months</p>
          </div>
          <div className="space-between">
            <p>Availability:</p>
            <p>
              {cardetails.reserved === false ? (
                <span>Not available</span>
              ) : (
                <span>available</span>
              )}
            </p>
          </div>
          <div className="more-model">
            <span className="desc_short">We can satisfy your desire!</span>
          </div>
          <Link to="/reservations" className="btn">
            <button
              type="button"
              className="reserve"
            >
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
