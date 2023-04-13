import React from "react";
import LandingPage from "./pages/Home/LandingPage";
import Home from "./pages/Home/Home";
import Courses from "./pages/Home/Courses";
import Trending from "./pages/Home/Trending";
import "./Style.scss";
import Signup from "./components/Signup";
import Feedback from "./pages/Home/Feedback";
import Creators from "./pages/Home/Creators";
import Followers from "./pages/Home/followers";
import Discord from "./pages/Home/Discord";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
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
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
