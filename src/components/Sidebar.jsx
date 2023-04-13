
import { useNavigate } from "react-router-dom";
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
} from "react-icons/fa";
import { toggleCurrSidebar } from "../features/stateSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const SideBtn = reduxSelector((state) => state.state.currSidebar);
  const dispatch = reduxDispatch();
  const toggleSideBtn = (e) => {
    dispatch(toggleCurrSidebar(e));
    navigate(e);
  };

  return (
    <div className="sideWrapper">
      <div className="sideToggle">
        <div className="sideContentView">
          <FaThList />
        </div>
      </div>
      <div className="sideContent">
        <div
          className={
            SideBtn === "home"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"
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
            SideBtn === "followers"
              ? "sideContentView sideBtnColor"
              : "sideContentView sideContentHover"
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
              : "sideContentView sideContentHover"
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
              : "sideContentView sideContentHover"
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
              : "sideContentView sideContentHover"
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
          onClick={() => toggleSideBtn("signin")}
        >
          <FaSignInAlt />
          <div className="sideText">Signin</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
