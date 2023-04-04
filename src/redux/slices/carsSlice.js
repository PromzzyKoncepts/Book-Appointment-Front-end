import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRockets } from '../../api/index';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const res = await getRockets();
  return res.data;
});

const rocketSlice = createSlice({
  name: 'rocketInfo',
  initialState: {
    loading: 'init',
    rockets: [],
    status: false,
  },
  reducers: {
    reserve: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });

      return { ...state, rockets: newState };
    },
    unreserve: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });

      return { ...state, rockets: newState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, loading: 'Loading Api' }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({ ...state, loading: 'api loaded', rockets: action.payload }))
      .addCase(fetchRockets.rejected, (state) => ({ ...state, loading: 'Failed to load Api.' }));
  },
});

export const { reserve, unreserve } = rocketSlice.actions;
export default rocketSlice.reducer;
