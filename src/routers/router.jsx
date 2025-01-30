import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
 import Main from "../layout/Main"
import ApartmentPage from "../pages/ApartmentPage";
// import About from "../pages/About";
// import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

 
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};


export const router = createBrowserRouter([
  {
    
    element:<HeaderFooterLayout/>,
    errorElement: <h1>404 Not found</h1>,
    children: [
      { path: "/",
        element: <HomePage /> 
      },
      
    
      {
        path: "/flat",
        element: <ApartmentPage/>
      },
          
      {
        path: "/about",
        element: <h1>a propos de nous</h1>
          
      }
    ]
  }
]);
