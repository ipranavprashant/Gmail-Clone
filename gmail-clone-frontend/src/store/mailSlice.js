import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "inbox",
  initialState: {
    inbox: [],
  },
  reducers: {
    setInbox: (state, action) => {
      state.inbox = action.payload;
    },
  },
});

export const { setInbox } = mailSlice.actions;

export default mailSlice.reducer;
