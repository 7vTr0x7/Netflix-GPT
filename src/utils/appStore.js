import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./slices/useSlice";

const appStore = configureStore({
  reducer: {
    user: useSlice,
  },
});

export default appStore;
