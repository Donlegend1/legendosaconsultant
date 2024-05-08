import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Loaderimg = () => {
  return (
    <div id="global-loader">
      <img
        src={"/assets/images/logo.png"}
        className="loader-img"
        alt="Loader"
      />
    </div>
  );
};
root.render(
  <Fragment>
    {/* <ContextProvider> */}
    <BrowserRouter>
      <React.Suspense fallback={Loaderimg()}>
        <Routes>
          {/* <Route element={<MainLayout />}></Route> */}
          <Route element={<App />}>
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
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
    {/* </ContextProvider> */}
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
