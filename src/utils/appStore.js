import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/useSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
