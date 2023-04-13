import React from "react";

import logo from "../assets/Cipherschools_192x192.png";
import { useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="formContainer">
      <div className="formClose" onClick={() =>{ navigate("/") }}>
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
        <form className="mainForm" action="" method="post">
          <input
            type="text"
            placeholder="    Email Address"
            name="EmailAddress"
          />
          <input type="password" placeholder="    Password" name="Password" />
          <button type="submit">Create Account</button>
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
