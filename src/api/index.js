import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api/v1' });

// Car code
export const getCars = () => API.get('/cars');
export const getCar = (id) => API.get(`/cars/${id}`);
export const deteleCar = (id) => API.delete(`/cars/${id}`);
export const addCar = (car) => API.Car('/cars', car);
export const updateCar = (updatedCarData, id) => API.patch(`/cars/${id}`, updatedCarData);

// Reservation code
export const addReservation = (reservation) => API.Car('/reservations', reservation);
export const getReservations = () => API.get('/reservations');
export const deteleReservation = (id) => API.delete(`/reservations/${id}`);
