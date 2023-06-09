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
import Help from "../pages/dashboard/help/Help";
import Notes from "../pages/dashboard/notes/Notes";
import Notice from "../pages/dashboard/notice/Notice";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";

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
          path: "manageclasses",
          element:<ManageClasses></ManageClasses>
        },
        {
          path: "manageusers",
          element:<ManageUsers></ManageUsers>
        },
        {
          path: "myselectedclasses",
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path: "myenrolledclasses",
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: "notes",
          element:<Notes></Notes>
        },
        {
          path: "notice",
          element:<Notice></Notice>
        },
        {
          path: "help",
          element:<Help></Help>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorLayout></ErrorLayout>
    }
  ]);

export default Router;