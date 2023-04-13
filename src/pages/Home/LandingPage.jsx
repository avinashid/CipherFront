import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="homeOutlet"><Outlet /></div>
    </>
  );
};

export default LandingPage;
