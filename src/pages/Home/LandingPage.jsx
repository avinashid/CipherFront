import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DashNav from "../Dashboard/DashNav";
const LandingPage = () => {
  const home = useSelector(state=>state.state.currSidebar);
  return (
    <>
      {home==="home"? <Navbar />:<DashNav/>}
      <Sidebar />
      <div className="homeOutlet"><Outlet /></div>
    </>
  );
};

export default LandingPage;
