import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, addCar } from '../../api/index';

const FETCH_CARS = 'cars/FETCH_CARS';
const POST_CAR = 'cars/POST_CAR';
// const DELETE_CAR = 'cars/DELETE_CAR';
// const FETCH_CAR = 'cars/DELETE_CAR';

export const fetchCars = createAsyncThunk(FETCH_CARS, async () => {
  const res = await getCars();
  return res.data;
});

export const postCar = createAsyncThunk(POST_CAR, async ({ car }) => {
  const res = await addCar(car);
  return res.data;
});

const initialState = {
  car: {},
  allCars: [],
  loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state) => ({ ...state, loading: 'Loading' }))
      .addCase(fetchCars.fulfilled, (state, action) => ({ ...state, loading: 'succeeded', allCars: action.payload }))
      .addCase(fetchCars.rejected, (state) => ({ ...state, loading: 'Failed' }))
      .addCase(postCar.pending, (state) => ({ ...state, loading: 'Loading' }))
      .addCase(postCar.fulfilled, (state, action) => ({
        ...state,
        allCars: [
          ...(action.payload.status === 201 ? [action.payload.data] : []),
          ...state.allCars,
        ],
        message: action.payload.message,
        loading: action.payload.status === 200 ? 'succeeded' : 'failed',
      }))
      .addCase(postCar.rejected, (state, action) => ({
        ...state,
        loading: 'Failed',
        error: action.error.message,
      }));
  },
});

export const isLoading = (state) => state.cars.loading;
export const message = (state) => state.cars.message;
export const allCars = (state) => state.cars.allCars;

export default carSlice.reducer;
