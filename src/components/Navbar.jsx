import React from "react";
import logo from "../assets/Cipherschools_192x192.png";
import {
  useSelector as reduxSelector,
  useDispatch as reduxDispatch,
} from "react-redux";
import { toggleCurrNavbar } from "../features/stateSlice";
import { useNavigate } from "react-router-dom";
import { toggleCurrSidebar } from "../features/stateSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const nav = reduxSelector((state) => state.state.currNavbar);
  console.log(nav);
  const dispatch = reduxDispatch();
  const toggleNav = (item) => {
    dispatch(toggleCurrNavbar(item));
  };
  return (
    <div className="navWrapper">
      <div className="nav">
        <div className="navLogo">
          <img src={logo} alt="" width="40px" />
          <div>CipherSchools</div>
        </div>
        <div className="navSection">
          <div
            className={nav === "home" ? "bigText" : "navText"}
            onClick={() => toggleNav("home")}
          >
            Home
          </div>
          <div
            className={nav === "creator" ? "bigText" : "navText"}
            onClick={() => toggleNav("creator")}
          >
            Creator Access
          </div>
          <div
            className={nav === "live" ? "bigText" : "navText"}
            onClick={() => toggleNav("live")}
          >
            Live Reviews
          </div>
          <div
            className={nav === "community" ? "bigText" : "navText"}
            onClick={() => toggleNav("community")}
          >
            Community
          </div>
        </div>
        <div className="navButton">
          <button
            className="navBtn "
            onClick={() => {
              navigate("signup");
               dispatch(toggleCurrSidebar("home"));
            }}
          >
            New User{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
