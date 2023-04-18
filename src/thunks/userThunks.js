import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector as reduxSelector } from "react-redux";
import Cookies from "js-cookie";
export const fetchInitialState = createAsyncThunk(
  "user/fetchInitialState",
  async () => {
    const token = Cookies.get("userToken");
    console.log(token, " token");
    if (token) {
      try {
        const response = await fetch(
          "https://cipherbackend-3zyn.onrender.com/api/users/me",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
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

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const userId = await reduxSelector((state) => state.user.id);
    const token = Cookies.get("userToken");
    if (token) {
      try {
        const response = await fetch(
          `https://cipherbackend-3zyn.onrender.com/api/users/getuserdata:${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        console.log("this is data");
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
