import { configureStore } from '@reduxjs/toolkit';
import carReducer from './cars/carsSlice';
import userSlice from './user/user';

const store = configureStore({
  reducer: {
    cars: carReducer,
    user: userSlice,
  },
});

export default store;
