import { createSlice } from '@reduxjs/toolkit';
import { IError } from '../../models/IError';

const initialState: IError = {
  isError: false,
  message: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      return action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
