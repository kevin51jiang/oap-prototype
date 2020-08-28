import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  useGlobalStore,
  useStore1,
  useStore2,
  useStore3,
} from "../constants/stores";

const ThemedRoute = ({ render, ontarioRoute = false, ...rest }) => {
  const flow = useGlobalStore((state) => state.flow);

  const store1 = useStore1();
  const store2 = useStore2();
  const store3 = useStore3();
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <>

            <div style={{ zIndex: 127374 }}>
              <Header />
            </div>
            {!ontarioRoute && <Navigation />}
            <div className="ontario-row">
              <div className="content-body ontario-column ontario-small-12">
                {render()}
              </div>
            </div>
            <Footer />
          </>
        );
      }}
    />
  );
};

export default ThemedRoute;
