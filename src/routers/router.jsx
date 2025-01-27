import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import App from "../App";
// import HomePage from "../pages/Homepage";
// import ApartmentPage from "../pages/ApartmentPage";
// import About from "../pages/About";
// import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";
// import Main from "../layout/Main";
// const HeaderFooterLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Main>
//         <Outlet />
//       </Main>
//       <Footer />
//     </>
//   );
// };

export const router = createBrowserRouter([
  {
    path: '/',
    element:(
     <>
     <Navbar />
      <App />
      <Footer />
     </>
    ),
    errorElement: <h1>404 Not found</h1>
  },
    
      {
        path: "/flat",
        element: (
          <>
          <Navbar/>
          <h1>Nos appartements</h1>
          <Footer />
          </>
        )
      },
      {
        path: "/about",
        element: (
          <>
          <Navbar/>
          <h1>�� propos de nous</h1>
          <Footer />
          </>
        )
      },
      
  
]);
