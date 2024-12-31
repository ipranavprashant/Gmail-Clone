import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isInboxOpen: false,
  },
  reducers: {
    openInbox: (state) => {
      state.isInboxOpen = true;
    },
    closeInbox: (state) => {
      state.isInboxOpen = false;
    },
    toggleInbox: (state) => {
      state.isInboxOpen = !state.isInboxOpen;
    },
  },
});

export const { openInbox, closeInbox, toggleInbox } = uiSlice.actions;

export default uiSlice.reducer;
