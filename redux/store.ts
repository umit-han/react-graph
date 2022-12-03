import { configureStore } from '@reduxjs/toolkit';
import getGraphReducer from './slices/getGraphSlice';

export const store = configureStore({
  reducer: {
    getGraph: getGraphReducer,
  },
});
