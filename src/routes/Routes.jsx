import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        }
    ]
  },
]);
