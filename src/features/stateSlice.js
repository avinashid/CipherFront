import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    currNavbar: "home",
    currSidebar: "home",
    expandedSidebar: false,
  },
  reducers: {
    toggleExpandedSidebar: (state, action) => {
      state.expandedSidebar = action.payload;
    },
    toggleCurrSidebar: (state, action) => {
      state.currSidebar = action.payload;
      console.log(state.currSidebar, "asdf");
    },
    toggleCurrNavbar: (state, action) => {
      state.currNavbar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleCurrSidebar, toggleExpandedSidebar, toggleCurrNavbar } =
  stateSlice.actions;

export default stateSlice.reducer;
