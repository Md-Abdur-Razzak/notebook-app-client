import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import Home from "../Home/Home";
import Login from "../userVarifi/Login";
import Regesition from "../userVarifi/Regesition";
import Contack from "../Home/Contack";
import Services from "../Home/services";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainContainer></MainContainer>,
      
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Regesition></Regesition>
            },
            {
                path:'/contack',
                element:<Contack></Contack>
            },
            {
                path:'/services',
                element:<Services></Services>
            }
        ]
    },

   
   
])