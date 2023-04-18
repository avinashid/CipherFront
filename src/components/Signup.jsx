import React from "react";
import logo from "../assets/Cipherschools_192x192.png";
import { useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch as reduxDispatch } from "react-redux";
import { fetchInitialState } from "../thunks/userThunks";
import { toggleCurrSidebar } from "../features/stateSlice";
import Cookies from "js-cookie";
const Signup = () => {
  const dispatch = reduxDispatch();
  const navigate = useNavigate();
  const formData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
    password: "",
  };
  const setUserData = async (e) => {
    const res = await fetch("https://cipherbackend-3zyn.onrender.com/api/users/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e.token}`,
      },
      body: JSON.stringify({
        userId: e.id,
        aboutme: "",
        onTheWeb: {
          linkedin: "",
          facebook: "",
          twitter: "",
        },
        interests: [],
        personalInformation: {
          highestEducation: "",
          currentlyDoing: "",
        },
      }),
    });

    if (!res.ok) {
      window.alert("UserData already Exist");
      console.log(res);
    } else {
      let loginCredentials = {};
      loginCredentials = await res.json();
      console.log(loginCredentials)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://cipherbackend-3zyn.onrender.com/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        password: formData.password,
      }),
    });

    if (!res.ok) {
      window.alert("User already Exist");
    } else {
      let loginCredentials = {};
      loginCredentials = await res.json();
      Cookies.set("token", loginCredentials.token, { expires: 2 });
      setUserData(loginCredentials)
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
        <div className="formLegend">Create New Account</div>
        <div>Please provide information to signup</div>
      </div>
      <div className="">
        <form className="mainForm" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="First Name"
            name="FirstName"
            onChange={(e) => (formData.firstName = e.target.value)}
          />
          <input
            required
            onChange={(e) => (formData.lastName = e.target.value)}
            type="text"
            placeholder="Last Name"
            name="LastName"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            name="EmailAddress"
            onChange={(e) => (formData.email = e.target.value)}
          />
          <input
            onChange={(e) => (formData.phoneNumber = e.target.value)}
            type="number"
            minLength={10}
            placeholder="Phone (Optional)"
            name="Phone"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="Password"
            onChange={(e) => (formData.password = e.target.value)}
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="formBottom">
        Already Have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/signin")}
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default Signup;
