import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorLayout from "../layouts/ErrorLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

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
      path: "*",
      element: <ErrorLayout></ErrorLayout>
    }
  ]);

export default Router;