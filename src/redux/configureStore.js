import { configureStore } from '@reduxjs/toolkit';
import carReducer from './cars/carsSlice';

const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export default store;
