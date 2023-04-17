import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  useSelector as reduxSelector,
  useDispatch as reduxDispatch,
} from "react-redux";
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
  FaUser,
} from "react-icons/fa";
import {
  toggleCurrSidebar,
  toggleExpandedSidebar,
} from "../features/stateSlice";
import { fetchInitialState } from "../thunks/userThunks";

const Sidebar = () => {
  const navigate = useNavigate();
  const SideBtn = reduxSelector((state) => state.state.currSidebar);
  const dispatch = reduxDispatch();

  const expandedSidebar = reduxSelector((state) => state.state.expandedSidebar);
  const toggleSideBtn = (e) => {
    dispatch(toggleCurrSidebar(e));
    {
      e !== "home" ? navigate(e) : navigate("/");
    }
  };
  const isSignin = reduxSelector((state) => state.user.isLoggedIn);
  const toggleSignin = (e) => {
    if (isSignin) {
      Cookies.remove('userToken');
      dispatch(fetchInitialState());
      dispatch(toggleCurrSidebar("home"));
      navigate("/");
    } else {
      dispatch(toggleCurrSidebar("signin"));
      navigate("/signin");
    }
  };

  return (
    <div
      
      className={
        expandedSidebar ? "sideWrapper expandedWrapper" : "sideWrapper" 
      }
    >
      <div className="sideToggle">
        <div
          className="sideContentView"
          onClick={() => dispatch(toggleExpandedSidebar(!expandedSidebar))}
        >
          <FaThList />
        </div>
      </div>
      <div className="sideContent">
        <div
          className={
            SideBtn === "home"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover" + "hide"
          }
          onClick={() => toggleSideBtn("home")}
        >
          <FaHome />
          <div className="sideText">Home</div>
        </div>
        <div
          className={
            SideBtn === "courses"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"
          }
          onClick={() => toggleSideBtn("courses")}
        >
          <FaBook />

          <div className="sideText">Courses</div>
        </div>
        <div
          className={
            SideBtn === "trending"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"
          }
          onClick={() => toggleSideBtn("trending")}
        >
          <FaCompass />
          <div className="sideText">Trending</div>
        </div>
        <div
          className={
            SideBtn === "dashboard"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"
          }
          onClick={() => toggleSideBtn("dashboard")}
        >
          <FaUser />

          <div className="sideText">Dashboard</div>
        </div>
        <div
          className={
            SideBtn === "followers"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"  + " hide"
          }
          onClick={() => toggleSideBtn("followers")}
        >
          <FaUsers />
          <div className="sideText">Followers</div>
        </div>
        <div
          className={
            SideBtn === "discord"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover" + " hide"
          }
          onClick={() => toggleSideBtn("discord")}
        >
          <FaDiscord />
          <div className="sideText">Discord</div>
        </div>
        <div
          className={
            SideBtn === "creators"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"  + " hide"
          }
          onClick={() => toggleSideBtn("creators")}
        >
          <FaUsersCog />
          <div className="sideText">Creators</div>
        </div>
        <div
          className={
            SideBtn === "feedback"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover" + " hide"
          }
          onClick={() => toggleSideBtn("feedback")}
        >
          <FaWpforms />
          <div className="sideText">Feedback</div>
        </div>
      </div>
      <div className="sideSignin">
        <div
          className={
            SideBtn === "signin"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"
          }
          onClick={toggleSignin}
        >
          <FaSignInAlt />
          <div className="sideText">{isSignin ? "Signout" : "Sign in"}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
