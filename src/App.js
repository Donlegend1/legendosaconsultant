import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const Loaderimg = () => (
  <div id="global-loader">
    <img
      src={"/logo512.png"}
      className="loader-img"
      alt="Loader"
    />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/about`}
          element={<About />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/services`}
          element={<Services />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/project`}
          element={<Projects />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          element={<Contact />}
        />
      </Routes>
    
      <Footer />
    </BrowserRouter>
  );
};

export default App;
