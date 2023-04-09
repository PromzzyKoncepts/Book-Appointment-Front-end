/* eslint-disable */
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
      <div className="car_container" key={cardetails.id}>
        <div className="card-left">
          <h2><span className="span"> </span>{cardetails.name}</h2>
          <img src={cardetails.image_url} alt={cardetails.name} />
        </div>
        <div className="car_details">
          <div className="car-header">
            <p><strong>Model:</strong> {cardetails.model}</p>
            <p className="car-description">{cardetails.description}</p>
          </div>
          <h3><span className="span"> </span>Specifications</h3>
          <div className="specifications">
            <div className="total-amount fee">
              <p><strong>Rent Price:</strong> $ {cardetails.price}</p>
              <p></p>
            </div>
            <div className="finance fee">
              <p>Finance: $199</p>
            </div>
            <div className="option-fee">
              <p>Damages: $199</p>
            </div>
            <div className="duration">
              <p>Duration: 48 Months</p>
              <p></p>
            </div>
            <div className="availability">
              <p>Availability: {cardetails.reserved === false ? (
                <span>Not available</span>
              ) : (
                <span>available</span>
              )}</p>
            </div>
          </div>
            <div className="total-amount fee">
              <h3>Total: ${cardetails.price + 199 + 299}</h3>
            </div>
          <div className="reserve">
            <Link to="/reservations">
              <button
                type="button"
                className="reserve-btn"
              >
                Reserve
              </button>
            </Link>
          </div>
          <Link to="/reserve" className="btn">
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
