import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import mailSlice from "./mailSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    mail: mailSlice,
    ui: uiSlice,
  },
});

export default store;
