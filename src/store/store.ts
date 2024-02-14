import {combineReducers, configureStore} from '@reduxjs/toolkit';
import settingsReducer from '@slices/settings';
import authReducer from '@slices/auth';
import userReducer from '@slices/user';
import {api} from '@api';
import storage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
