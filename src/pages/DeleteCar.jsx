import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeCar, allCars } from '../redux/cars/carsSlice';

const DeleteCar = () => {
  const cars = useSelector(allCars);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeCar({ id, toast }));
  };

  return (
    <section className="delete-section">
      <h1 className="text-center">Delete Cars</h1>
      <div className="car-container">
        {
         Array.isArray(cars) && cars.map((car) => (
           <div className="car-card" key={car.id}>
             <img src={car.image_url} alt="car_image" width="100px" />
             <div className="car-detail">
               <p className="car-title">
                 {car.name}
                 {' '}
                 {car.model}
               </p>
               <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}> Delete</button>
             </div>
           </div>
         ))
        }
      </div>
    </section>
  );
};

export default DeleteCar;
