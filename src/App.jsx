import React from "react";
import Navbar from "./components/Navbar";
import "./Style.scss";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Signup/>
    </>
  );
};

export default App;
