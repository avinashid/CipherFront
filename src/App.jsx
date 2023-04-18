import React, { useEffect } from "react";
import LandingPage from "./pages/Home/LandingPage";
import Home from "./pages/Home/Home";
import Courses from "./pages/Home/Courses";
import Trending from "./pages/Home/Trending";
import "./Style.scss";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Feedback from "./pages/Home/Feedback";
import Creators from "./pages/Home/Creators";
import Followers from "./pages/Home/followers";
import Discord from "./pages/Home/Discord";
import ErrorPage from "./pages/ErrorPage";
import {
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch as reduxDispatch } from "react-redux";
import { fetchInitialState } from "./thunks/userThunks";
import ProtectedRoute from "./pages/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "discord",
        element: <Discord />,
      },
      {
        path: "creators",
        element: <Creators />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "dashboard",
        element: <ProtectedRoute />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = reduxDispatch();

  useEffect(() => {
    dispatch(fetchInitialState());
  }, []);

  return (
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  );
};

export default App;
