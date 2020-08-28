import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PSRoute.scss";

const PSRoute = ({ render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <div className="ps-page">
            <div className="sticky-header">
              <Header />
            </div>
            <div
              style={{ maxWidth: "unset" }}
              className="content-body ontario-column ontario-small-12 ontario-large-12"
            >
              <div className="ontario-row ">
                <h1>Public Secure</h1>
                {render()}
              </div>
            </div>
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default PSRoute;
