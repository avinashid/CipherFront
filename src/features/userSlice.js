import { createSlice } from '@reduxjs/toolkit';
import { fetchInitialState } from '../thunks/userThunks';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: "",
    lastname:"",
    email:"",
    phone:null,
    token: 'home',
    id: '',
    isLoggedIn: false,
    isLoading:true,
  },
  reducers: {
    toggleExpandedSidebar: (state, action) => {
      state.expandedSidebar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialState.fulfilled, (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname=action.payload.lastname;
      state.email=action.payload.email;
      state.phone=action.payload.phone;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn =action.payload.isLoggedIn;
      state.isLoading=action.payload.isLoading;
    });
  },
});

// Action creators are generated for each case reducer function
export const { toggleExpandedSidebar } = userSlice.actions;

export default userSlice.reducer;
