import React from "react";
import logo from "../assets/Cipherschools_192x192.png";

const Signup = () => {
  return (
    <div className="formContainer">
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
        <form className="mainForm" action="" method="post">
          <input type="text" placeholder="    First Name" name="FirstName" />
          <input type="text" placeholder="    Last Name" name="LastName" />
          <input type="text" placeholder="    Email Address" name="EmailAddress" />
          <input type="text" placeholder="    Phone (Optional)" name="Phone" />
          <input type="password" placeholder="    Password" name="Password" />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="formBottom">
        Already Have an account? SignIn Now
      </div>
    </div>
  );
};

export default Signup;
