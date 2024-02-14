import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserDTO} from '@types';
import {RootState} from 'react-redux';

export interface UserState {
  user: UserDTO | null;
  code: string | null;
}

const initialState: UserState = {
  user: null,
  code: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserDTO>) => {
      state.user = action.payload;
    },
    saveCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    deleteUser: state => {
      state.user = null;
      state.code = null;
    },
  },
});

export const {saveUser, saveCode, deleteUser} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
