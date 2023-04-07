import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeCar, allCars } from '../redux/cars/carsSlice';
// import { useNavigate } from 'react-router-dom';

const DeleteCar = () => {
  const cars = useSelector(allCars);
  const dispatch = useDispatch();
  console.log(cars);
  // const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(removeCar({ id, toast }));
  };

  return (
    <section>
      <h1 className="text-center">Delete Cars</h1>
      <ul className="cars-container">
        {
          cars.map((car) => (
            <li className="card-car" key={car.id}>
              <img className="car-image" src={car.image_url} alt="car_image" width="100px" />
              <div className="car-detail">
                <span className="car-title">
                  {car.name}
                  {' '}
                  {car.model}
                </span>
                <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}> Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default DeleteCar;
