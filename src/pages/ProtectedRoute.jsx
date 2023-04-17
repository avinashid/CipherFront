import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector as reduxSelector} from "react-redux";
import Dashboard from "./Dashboard/Dashboard";


const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isLoggedIn = reduxSelector((state) => state.user.isLoggedIn);
  const isLoading = reduxSelector((state) => state.user.isLoading);
  const user = reduxSelector((state) => state.user);
  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      navigate("/signin");
    }
  }, [isLoggedIn, isLoading]);

  if (isLoggedIn) {
    
    console.log(user)
    return <Dashboard />;
  } else if (isLoading) {
    return null;
  } else {
    return null;
  }
};
export default ProtectedRoute;
