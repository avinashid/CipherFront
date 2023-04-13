import React from "react";
import Navbar from "./components/Navbar";
import "./Style.scss";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Signup/> */}
    </div>
  );
};

export default App;
