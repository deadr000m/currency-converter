import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './slices/currencySlice';
import errorReducer from './slices/errorSlice';

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
