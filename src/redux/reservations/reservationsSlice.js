import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReservations, addReservation } from '../../api/index';

const FETCH_RESERVATIONS = 'reservations/RESERVATIONS';
const ADD_RESERVATION = 'reservations/ADD_RESERVATION';
// const DELETE_RESERVATION = 'reservations/RESERVATION';

export const fetchReservations = createAsyncThunk(FETCH_RESERVATIONS, async () => {
  try {
    const response = await getReservations();
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const createReservation = createAsyncThunk(ADD_RESERVATION, async (
  { reservationData, navigate, toast },
  { rejectWithValue },
) => {
  try {
    const response = await addReservation(reservationData);
    toast.success('Reservation created successfully!');
    navigate('/');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  allReservations: [],
  loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,
  reserved: false,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    isReserved: (state, action) => {
      state.reserved = action.payload;
    },
  },
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
export const { isReserved } = reservationsSlice.actions;

export default reservationsSlice.reducer;
