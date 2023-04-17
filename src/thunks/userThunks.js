import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchInitialState = createAsyncThunk(
  "user/fetchInitialState",
  async () => {
    const token = localStorage.getItem("userToken");
    console.log(token, " token");
    if (token) {
      try {
        const response = await fetch("http://localhost:5000/api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        return {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          token,
          id: data.id,
          isLoggedIn: true,
          isLoading: false,
        };
      } catch (error) {
        return {
          firstname: "",
          lastname: "",
          phone: null,
          email: "",
          token,
          id: "",
          isLoggedIn: false,
          isLoading: false,
        };
      }
    }
    return {
      firstname: "",
      lastname: "",
      phone: null,
      email: "",
      token: null,
      id: "",
      isLoggedIn: false,
      isLoading: false,
    };
  }
);
