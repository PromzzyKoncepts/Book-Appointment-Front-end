import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api/v1' });

// Car code
export const getCars = () => API.get('/cars');
export const getCar = (id) => API.get(`/cars/${id}`);
export const deteleCar = (id) => API.delete(`/cars/${id}`);
export const addCar = (car) => API.post('/cars', car);

// Reservation code
export const addReservation = (reservation) => API.post('/reservations', reservation);
export const getReservations = () => API.get('/reservations');
export const deteleReservation = (id) => API.delete(`/reservations/${id}`);
