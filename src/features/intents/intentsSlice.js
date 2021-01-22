import { createSlice } from '@reduxjs/toolkit';
import intents from './intents.json';

export const intentsSlice = createSlice({
  name: 'intents',
  initialState: {
    list: intents,
  },
});

export default intentsSlice.reducer;
