import { configureStore } from '@reduxjs/toolkit';
import intentsReducer from '../features/intents/intentsSlice';

export default configureStore({
  reducer: {
    intents: intentsReducer,
  },
});
