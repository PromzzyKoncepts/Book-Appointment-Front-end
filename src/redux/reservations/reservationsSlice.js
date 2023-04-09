import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReservations, addReservation } from '../../api/index';

const FETCH_RESERVATIONS = 'reservations/RESERVATIONS';
const ADD_RESERVATION = 'reservations/ADD_RESERVATION';
// const DELETE_RESERVATION = 'reservations/RESERVATION';

export const fetchReservations = createAsyncThunk(FETCH_RESERVATIONS, async () => {
  try {
    const response = await getReservations();
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

// export const fetchCar = createAsyncThunk(FETCH_CAR, async (id) => {
//   try {
//     const response = await getCar(id);
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// });

export const createReservation = createAsyncThunk(ADD_RESERVATION, async (
  { carData, navigate, toast },
  { rejectWithValue },
) => {
  try {
    const response = await addReservation(carData);
    toast.success('Car created successfully!');
    navigate('/');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// export const removeCar = createAsyncThunk(DELETE_CAR, async (
//   { id, navigate, toast }, { rejectWithValue },
// ) => {
//   try {
//     const response = await deteleCar(id);
//     toast.success('Car deleted successfully!');
//     navigate('/');
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

const initialState = {
  allReservations: [],
  loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => ({ ...state, loading: 'loading' }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        loading: 'succeeded',
        allReservations: action.payload.data,
      }))
      .addCase(fetchReservations.rejected, (state) => ({ ...state, loading: 'failed' }))
      .addCase(createReservation.pending, (state) => ({ ...state, loading: 'Loading' }))
      .addCase(createReservation.fulfilled, (state, action) => ({
        ...state,
        allCars: [...state.allReservations, action.payload.data],
        message: action.payload.message,
        loading: action.payload.status,
      }))
      .addCase(createReservation.rejected, (state, action) => ({
        ...state,
        loading: 'Failed',
        error: action.error.message,
      }));
  },
});

export const isLoading = (state) => state.reservations.loading;
export const message = (state) => state.reservations.message;
export const allReservations = (state) => state.reservations.allReservaions;

export default reservationsSlice.reducer;
