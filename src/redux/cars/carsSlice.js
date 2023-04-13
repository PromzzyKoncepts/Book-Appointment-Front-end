import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCars, addCar, getCar, deteleCar, updateCar,
} from '../../api/index';

const FETCH_CARS = 'cars/FETCH_CARS';
const CREATE_CAR = 'cars/CREATE_CAR';
const DELETE_CAR = 'cars/DELETE_CAR';
const FETCH_CAR = 'cars/FETCH_CAR';
const UPDATE_CAR = 'cars/UPDATE_CAR';

export const fetchCars = createAsyncThunk(FETCH_CARS, async () => {
  try {
    const response = await getCars();
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const fetchCar = createAsyncThunk(UPDATE_CAR, async ({ updatedCarData, id }) => {
  try {
    const response = await updateCar(updatedCarData, id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const updateReserved = createAsyncThunk(FETCH_CAR, async (id) => {
  try {
    const response = await getCar(id);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const createCar = createAsyncThunk(CREATE_CAR, async (
  { carData, navigate, toast },
  { rejectWithValue },
) => {
  try {
    const response = await addCar(carData);
    toast.success('Car created successfully!');
    navigate('/');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const removeCar = createAsyncThunk(DELETE_CAR, async (
  { id, navigate, toast }, { rejectWithValue },
) => {
  try {
    const response = await deteleCar(id);
    toast.success('Car deleted successfully!');
    navigate('/');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  car: {},
  carId: 0,
  allCars: [],
  loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    getCarId: (state, action) => {
      state.carId = action.payload;
    },
  },
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
        allCars: [...state.allCars, action.payload.data],
        message: action.payload.message,
        loading: action.payload.status,
      }))
      .addCase(createCar.rejected, (state, action) => ({
        ...state,
        loading: 'Failed',
        error: action.error.message,
      }))
      .addCase(removeCar.pending, (state) => ({ ...state, loading: 'Loading' }))
      .addCase(removeCar.fulfilled, (state, action) => ({
        ...state,
        allCars: state.allCars.filter((item) => item.id !== action.payload.id),
        message: action.payload.message,
        loading: action.payload.status,
      }))
      .addCase(removeCar.rejected, (state, action) => ({
        ...state,
        loading: 'Failed',
        error: action.error.message,
      }))
      .addCase(updateReserved.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateReserved.fulfilled, (state, action) => {
        state.loading = false;
        const { arg: { id } } = action.meta;
        if (id) {
          state.allCars = state.allCars
            .map((car) => (car.id === id ? action.payload : car));
        }
      })
      .addCase(updateReserved.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const isLoading = (state) => state.cars.loading;
export const message = (state) => state.cars.message;
export const allCars = (state) => state.cars.allCars;
export const car = (state) => state.cars.car;
export const { getCarId } = carSlice.actions;

export default carSlice.reducer;
