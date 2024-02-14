import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'react-redux';

export interface AuthState {
  isAuth: boolean;
  jsonWebToken: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  jsonWebToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<string>) => {
      state.jsonWebToken = action.payload;
      state.isAuth = true;
    },
    userLoggedOut: state => {
      state.jsonWebToken = null;
      state.isAuth = false;
    },
  },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
