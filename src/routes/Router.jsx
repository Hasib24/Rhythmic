import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorLayout from "../layouts/ErrorLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import DashboardLayout from "../layouts/DashboardLayout";

import MySelectedClasses from "../pages/dashboard/selectedclasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/dashboard/enrolled/MyEnrolledClasses";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path : "/",
          element: <Home></Home>
        },
        {
          path : "/instractors",
          element: <Instructors></Instructors>
        },
        {
          path : "/classes",
          element: <Classes></Classes>
        },
        {
          path : "/login",
          element: <Login></Login>
        },
        {
          path : "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "myselectedclasses",
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path: "myenrolledclasses",
          element:<MyEnrolledClasses></MyEnrolledClasses>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorLayout></ErrorLayout>
    }
  ]);

export default Router;