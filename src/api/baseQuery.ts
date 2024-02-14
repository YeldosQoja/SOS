import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import Config from 'react-native-config';
import {RootState} from 'react-redux';

export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.jsonWebToken;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
