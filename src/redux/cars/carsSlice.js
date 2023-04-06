import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, addCar, getCar } from '../../api/index';

const FETCH_CARS = 'cars/FETCH_CARS';
const CREATE_CAR = 'cars/CREATE_CAR';
// const DELETE_CAR = 'cars/DELETE_CAR';
const FETCH_CAR = 'cars/DELETE_CAR';

export const fetchCars = createAsyncThunk(FETCH_CARS, async () => {
  try {
    const response = await getCars();
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const fetchCar = createAsyncThunk(FETCH_CAR, async () => {
  try {
    const response = await getCar();
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const createCar = createAsyncThunk(CREATE_CAR, async (
  { updatedCarData, toast },
  { rejectWithValue },
) => {
  try {
    const response = await addCar(updatedCarData);
    toast.success('Car created successfully!');
    // navigate('/');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
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
      .addCase(fetchCars.pending, (state) => ({ ...state, loading: 'loading' }))
      .addCase(fetchCars.fulfilled, (state, action) => ({
        ...state,
        loading: 'succeeded',
        allCars: action.payload.data,
      }))
      .addCase(fetchCar.pending, (state) => ({ ...state, loading: 'loading' }))
      .addCase(fetchCar.fulfilled, (state, action) => ({
        ...state,
        loading: 'succeeded',
        car: action.payload.data,
      }))
      .addCase(fetchCar.rejected, (state) => ({ ...state, loading: 'Failed' }))
      .addCase(createCar.pending, (state) => ({ ...state, loading: 'Loading' }))
      .addCase(createCar.fulfilled, (state, action) => ({
        ...state,
        allCars: action.payload.data,
        message: action.payload.message,
        loading: action.payload.status,
      }))
      .addCase(createCar.rejected, (state, action) => ({
        ...state,
        loading: 'Failed',
        error: action.error.message,
      }));
  },
});

export const isLoading = (state) => state.cars.loading;
export const message = (state) => state.cars.message;
export const allCars = (state) => state.cars.allCars;
export const car = (state) => state.cars.car;

export default carSlice.reducer;
