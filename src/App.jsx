 import React from 'react'
import Signin from './pages/Signin/components/Signin'
import Signup from './pages/Signup/components/Signup'
import Product from './pages/Products/components/Product'
import Cart from './pages/Cart/components/Cart'
import Categories from './pages/Categories/components/Categories'
import Home from './pages/Home/components/Home'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './routes/Root'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes'
import CategoryProduct from './components/CategoryProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
    element: <Home/>,
      },
      {
        path: "/categories/:id",
    element: <CategoryProduct/>,
      },
     
    
      {
        path: "/Signin",
    element: <Signin/>,
      },
      {
        path: "/Signup",
    element: <Signup/>,
      },
      {
        path: "/Product",
    element: <Product/>,
      },
      {
        path: "/Categories",
    element: <Categories/>,
      },
      {
        path: "/Cart",
    element:
    <ProtectedRoutes>
      <Cart/>
    </ProtectedRoutes>
     
     
     ,
      }


    ],
  },
]);
 export default function App() {
   return (
   <>
   <RouterProvider router={router} />
   <ToastContainer />

   </>
   )
 }
 