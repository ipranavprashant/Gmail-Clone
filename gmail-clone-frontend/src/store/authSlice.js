import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    tokenInfo: null,
    user: null,
  },
  reducers: {
    token: (state, action) => {
      state.isLoggedIn = true;
      state.tokenInfo = action.payload;
    },
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.tokenInfo = null;
      state.user = null;
    },
  },
});

export const { login, logout, token } = authSlice.actions;
export default authSlice.reducer;
