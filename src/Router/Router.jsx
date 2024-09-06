import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";

import Schedule from "../components/Schedule";
import Addminers from "../components/Addminers";
import Current from "../components/Current";
import Details from "../components/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Details />,
      },
      {
        path: "current",
        element: <Current />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-miners",
        element: <Addminers />, 
      },
      {
        path: "schedules",
        element: <Schedule />, 
      },
    ],
  },
]);

export default Router;
