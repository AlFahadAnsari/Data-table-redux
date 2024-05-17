import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    entries: [],
  },
  reducers: {
    addData: (state, action) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
