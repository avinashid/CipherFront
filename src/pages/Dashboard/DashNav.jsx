import React from "react";
import logo from "../../assets/Cipherschools_192x192.png";
import { FaSearch, FaChevronDown, FaRegBell,FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialState } from "../../thunks/userThunks";
const DashNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state =>state.user.isLoggedIn);
  const logout = ()=>{
    localStorage.setItem("userToken","");
    dispatch(fetchInitialState());
    navigate("/");
  }
  return (
    <div className="dashNav">
      <div className="dashNavWrapper">
        <div className="navLogo" onClick={()=>navigate("/")}>
          <img src={logo} alt="" width="40px" />
          <div>CipherSchools</div>
        </div>
        <div className="dashNavWrapperRight">
          <div className="searchWrap">
            <div className="searchLeft">
              <FaSearch />
              <input type="text" name="" placeholder="Search and Learn" />
            </div>
            <div className="notification">
              <FaChevronDown />

            </div>
          </div>
          <FaRegBell className="icon"/>
          {login &&  <FaSignOutAlt className="icon"  onClick={logout}/>}
        </div>
        
      </div>
    </div>
  );
};

export default DashNav;
