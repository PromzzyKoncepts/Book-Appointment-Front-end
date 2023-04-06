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
        <img src={cardetails.image_url} alt={cardetails.name} />
        <div className="car_details">
          <h2>{cardetails.name}</h2>
          <ul>
            <li>
              Model:
              {' '}
              <span>{cardetails.model}</span>
            </li>
            <li className="price">
              Price:
              {' '}
              <span>
                {cardetails.price}
                $
              </span>
            </li>
            <li>
              Availability:
              {cardetails.reserved === false ? (
                <span>Not available</span>
              ) : (
                <span>available</span>
              )}
            </li>
          </ul>
          <span className="desc_short">We can satisfy your desire!</span>
          <Link to="/reservations">
            <button
              type="button"
              className="add-button"
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
