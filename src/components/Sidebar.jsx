import React from "react";
import {
  FaThList,
  FaHome,
  FaBook,
  FaCompass,
  FaUsers,
  FaDiscord,
  FaUsersCog,
  FaWpforms,
  FaSignInAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sideWrapper">
      <div className="sideToggle">
        <div className="sideContentView">
          <FaThList />
        </div>
      </div>
      <div className="sideContent" >
        <div className="sideContentView" style={{color:"white",background:"orange"}}>
          <FaHome />
          <div className="sideText">Home</div>
        </div>
        <div className="sideContentView">
          <FaBook />

          <div className="sideText">Courses</div>
        </div>
        <div className="sideContentView">
          <FaCompass />
          <div className="sideText">Trending</div>
        </div>
        <div className="sideContentView">
          <FaUsers />
          <div className="sideText">Followers</div>
        </div>
        <div className="sideContentView">
          <FaDiscord />
          <div className="sideText">Discord</div>
        </div>
        <div className="sideContentView">
          <FaUsersCog />
          <div className="sideText">Creators Access</div>
        </div>
        <div className="sideContentView">
          <FaWpforms />
          <div className="sideText">Feedback</div>
        </div>
      </div>
      <div className="sideSignin">
        <div className="sideContentView">
          <FaSignInAlt />
          <div className="sideText">Signin</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
