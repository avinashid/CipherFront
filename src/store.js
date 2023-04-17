import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./features/stateSlice";
import userSlice from "./features/userSlice";

export default configureStore({
  reducer: {
    state:stateSlice,
    user:userSlice,
  },
});
