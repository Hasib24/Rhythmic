import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorLayout from "../layouts/ErrorLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import DashboardLayout from "../layouts/DashboardLayout";

import MySelectedClasses from "../pages/dashboard/student/selectedclasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/dashboard/student/enrolled/MyEnrolledClasses";
import Help from "../pages/dashboard/general/help/Help";
import Notes from "../pages/dashboard/general/notes/Notes";
import Notice from "../pages/dashboard/general/notice/Notice";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import Enrolledstudents from "../pages/dashboard/instractor/enrolledstudents/Enrolledstudents";
import AddClass from "../pages/dashboard/instractor/addclass/AddClass";
import MyClasses from "../pages/dashboard/instractor/myclasses/MyClasses";
import Feedback from "../pages/dashboard/instractor/feedbackhub/Feedback";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../pages/dashboard/general/dashboard/DashboardHome";

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
      element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
      children: [
        // admin [ For admin only ]
        {
          path: "manageclasses",
          element:<ManageClasses></ManageClasses>
        },
        {
          path: "manageusers",
          element:<ManageUsers></ManageUsers>
        },

        // instructor [ For instructors only ]
        {
          path: "addclass",
          element:<AddClass></AddClass>
        },
        {
          path: "myclasses",
          element:<MyClasses></MyClasses>
        },
        {
          path: "enrolledstudents",
          element:<Enrolledstudents></Enrolledstudents>
        },
        {
          path: "Feedback",
          element:<Feedback></Feedback>
        },
        {
          path: "enrolledstudents",
          element:<Enrolledstudents></Enrolledstudents>
        },

        // students [ For every one except instructor and admin ]
        {
          path: "myselectedclasses",
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path: "myenrolledclasses",
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },

        // general [ For every one ]
        {
          path: "dashboard",
          element: <DashboardHome></DashboardHome>
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