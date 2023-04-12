import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    isLoggedIn: !!localStorage.getItem('token'),
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  loginStart, loginSuccess, loginFailure, logout,
} = userSlice.actions;
export default userSlice.reducer;
