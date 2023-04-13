import React from "react";
// import "../Style.css";
import logo from "../assets/Cipherschools_192x192.png";
const Navbar = () => {
  return (
    <div className="navWrapper">
      <div className="nav">
        <div className="navLogo">
          <img src={logo} alt="" width="40px" />
          <div>CipherSchools</div>
        </div>
        <div className="navSection">
          <div>Home</div>
          <div>Creator Access</div>
          <div>Live Reviews</div>
          <div>Community</div>
        </div>
        <div className="navButton">
          <button className="navBtn">Explore Courses</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
