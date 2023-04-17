import React from "react";

import logo from "../assets/Cipherschools_192x192.png";
import { useNavigate } from "react-router-dom";
import { useDispatch as reduxDispatch, useSelector } from "react-redux";
import { FaRegTimesCircle } from "react-icons/fa";
import { toggleCurrSidebar } from "../features/stateSlice";
import { fetchInitialState } from "../thunks/userThunks";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = reduxDispatch();
  const select = useSelector((state) => state);
  console.log(select);
  const formData = {
    email: "",
    password: "",
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (!res.ok) {
      window.alert("Email or Password incorrect");
    } else {
      let loginCredentials = {};
      loginCredentials = await res.json();
      localStorage.setItem("userToken", loginCredentials.token);
      await dispatch(fetchInitialState());
      navigate("/dashboard");
    }
  };

  const closeForm = () => {
    navigate("/");
    dispatch(toggleCurrSidebar("home"));
  };
  return (
    <div className="formContainer">
      <div className="formClose" onClick={closeForm}>
        <FaRegTimesCircle />
      </div>
      <div className="formLogo">
        <div className="logo">
          <img src={logo} alt="" width="40px" />
        </div>
        <div>CipherSchools</div>
      </div>
      <div className="formHeader">
        <div className="formLegend">Welcome Back</div>
        <div>Please provide information to Sign In</div>
      </div>
      <div className="">
        <form className="mainForm" onSubmit={handleLogin}>
          <input
            required
            type="email"
            placeholder="Email Address"
            name="EmailAddress"
            onChange={(e) => (formData.email = e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="Password"
            onChange={(e) => (formData.password = e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="formBottom">
        Create an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Signin;
