import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === 'test' && password === 'password') { 
        state.isAuthenticated = true;
        state.user = { username };
        state.error = null;
      } else {
        state.error = 'Invalid credentials';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export const { login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;
