import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  auth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<any>) {
      state.isAuthenticated = true;
      state.auth = action.payload;
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.auth = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
