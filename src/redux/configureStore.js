import { configureStore } from '@reduxjs/toolkit';
import carReducer from './cars/carsSlice';
import reservationReducer from './reservations/reservationsSlice';
import userSlice from './user/user';

const store = configureStore({
  reducer: {
    cars: carReducer,
    reservations: reservationReducer,
    user: userSlice,
  },
});

export default store;
