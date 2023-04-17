import React from "react";
import DashNav from "./DashNav";
import AboutMe from "./AboutMe";
import Profile from "./Profile";
import { toggleCurrSidebar } from "../../features/stateSlice";
import { useDispatch } from "react-redux";
import OnTheWeb from "./OnTheWeb";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(toggleCurrSidebar("dashboard"));
  return (
    <div className="dashboard">
      <Profile />
      <AboutMe />
      <OnTheWeb/>
      
    </div>
  );
};

export default Dashboard;
