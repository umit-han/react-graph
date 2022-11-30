import { configureStore } from '@reduxjs/toolkit';
import getGraphReducer from './slices/GetGraphSlice';

export const store = configureStore({
  reducer: {
    getGraph: getGraphReducer,
  },
});
