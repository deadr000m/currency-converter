import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICurrencies } from '../../models/ICurrencies';

const initialState: ICurrencies[] = [];

export const currencySlice = createSlice({
  name: 'currencies',
  initialState: initialState,
  reducers: {
    setCurrencies: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCurrencies } = currencySlice.actions;
export default currencySlice.reducer;
