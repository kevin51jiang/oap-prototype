import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";
import { LangContext } from "./components/Lang";
import "./ds.scss";

ReactDOM.render(
  <div id="oap-app">
    <LangContext.Provider value={"en"}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </LangContext.Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
