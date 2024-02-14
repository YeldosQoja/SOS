import {store} from '@store/store';

declare module 'react-redux' {
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
}
