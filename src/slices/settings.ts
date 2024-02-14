import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'react-redux';
import i18n from '../i18n';

type Language = 'kz' | 'ru';

export interface SettingsState {
  language: Language;
}

const initialState: SettingsState = {
  language: 'ru',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      i18n.changeLanguage(action.payload);
      state.language = action.payload;
    },
  },
});

export const {changeLanguage} = settingsSlice.actions;

export const selectLanguage = (state: RootState) => state.settings.language;

export default settingsSlice.reducer;
