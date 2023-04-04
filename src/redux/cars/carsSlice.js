import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../../api/index';

const FETCH_CARS = 'cars/FETCH_CARS';
// const POST_CAR = 'cars/POST_CAR';
// const DELETE_CAR = 'cars/DELETE_CAR';

export const fetchCars = createAsyncThunk(FETCH_CARS, async () => {
  const res = await getCars();
  return res.data;
});

const initialState = {
  car: {},
  allCars: [],
  loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
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
      .addCase(fetchCars.rejected, (state) => ({ ...state, loading: 'Failed' }));
  },
});

export const isLoading = (state) => state.cars.loading;
export const allCars = (state) => state.cars.allCars;

export default carSlice.reducer;
