import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
    children:[
        {
            index:true,
            element:<Home></Home>,

        },
        {
            path:'/apps',
            element:<Apps></Apps>,
        },
        {
            path:'/installation',
            element:<Installation></Installation>,
        },
        {
          path:'/app-details/:id',
          element:<AppDetails></AppDetails>,
        }
    ]
    
  },
  {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
]);
