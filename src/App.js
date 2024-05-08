import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Header2 from "./components/Header2";

import Footer from "./components/Footer";
import Slidder from "./components/Slidder";

function App() {

   const currentUrl = window.location.pathname;

   console.log("Current URL:", currentUrl);

   // Check if the current URL is the homepage
   const isHomePage = currentUrl === "/";
  return (
    <Fragment>
     
        <Header />
      <Outlet />

      <Footer />
    </Fragment>
  );
}

export default App;
