import React, { useState } from "react";

import "./Signin.scss";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react";

import firebase from "firebase";
import {
  PS_SECURITYQUESTIONS,
  EMAIL_VERIFICATION,
} from "../../constants/routes";
import { useGlobalStore } from "../../constants/stores";

const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const Signin = (props) => {
  const history = useHistory();

  const global = useGlobalStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouch, setEmailTouch] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (emailPattern.test(email)) {
      //valid email
      if (!validEmail) setValidEmail(true);
    } else {
      //invalid email
      if (validEmail) setValidEmail(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 8) {
      if (!validPassword) setValidPassword(true);
    } else {
      if (validPassword) setValidPassword(false);
    }
  });

  const submitForm = (e) => {
    // used to ensure a cached version of the function is not run
    Math.random();

    e.persist();
    e.preventDefault();
    const email = e.target[0].value;
    const pass = e.target[1].value;

    setHasSubmitted(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.push(
          global.flow === 2 ? EMAIL_VERIFICATION : PS_SECURITYQUESTIONS
        );
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("error", error);

        // simulate loading screen
        // also have user response for each time submitting
        setTimeout(() => {
          setShowError(false);
          setTimeout(() => {
            setShowError(true);
          }, 1000);
        }, 0);
      });
  };

  return (
    <div className="signin">
      <div className="col-md-12">
        <hr className="thick" />
      </div>

      {showError && (
        <div className="alert alert-danger ">
          The username and password combination entered is incorrect. If you're
          new to Public Secure, please create an account.
          <br />
          <br />
          If you have already registered as a "My Ontario Login" user, please
          enter the username and password you registered with.
          <br />
          <br />
          If you have already registered as a "SecureKey Concierge" user, please
          select "Sign in" from the menu and then select the "SecureKey
          Concierge" sign in option.
        </div>
      )}
      <div className="col-md-12 ng-hide sign-in-error" ng-show="hasError">
        <div className="ng-binding" role="alert"></div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 ng-scope" ng-if="!hideCreateOption">
            <h2 className="subtitle ng-binding">New user?</h2>
            <button
              onClick={() => history.push(process.env.PUBLIC_URL + "/ps/terms")}
              className="btn btn-primary btn-wide ng-binding"
            >
              Create login
            </button>
          </div>
          <div className="col-md-4 signin-divider">
            <hr className="thick" />
            <h2 className="subtitle ng-binding">Sign In</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="form-group">
                <label className="control-label ng-binding" htmlFor="username">
                  Email <span className="symbol required"></span>
                </label>
                <input
                  type="email"
                  className={
                    "form-control" +
                    (emailTouch && !validEmail ? " form-err" : "")
                  }
                  id="ps-email"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    if (!emailTouch) setEmailTouch(true);
                  }}
                />

                {emailTouch &&
                  !validEmail &&
                  (email === "" ? (
                    <span
                      ng-show="loginForm.username.$touched &amp;&amp; loginForm.username.$invalid &amp;&amp; loginForm.username.$error.required"
                      className="help-block ng-binding ng-hide"
                      role="alert"
                    >
                      Please enter your email address{" "}
                    </span>
                  ) : (
                    <span
                      ng-show="loginForm.username.$touched &amp;&amp; loginForm.username.$invalid &amp;&amp; (loginForm.username.$error.email || loginForm.username.$error.pattern)"
                      className="help-block ng-binding ng-hide"
                      role="alert"
                    >
                      Your email must be in this format: username@example.com
                    </span>
                  ))}
              </div>
              <div className="form-group">
                <label className="control-label ng-binding" htmlFor="password">
                  Password <span className="symbol required"></span>
                </label>{" "}
                <span className="input-icon input-icon-right">
                  <input
                    id="password"
                    className="form-control"
                    name="password"
                    required=""
                    aria-required="true"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <a
                    id="showHidePassword"
                    className="fa fa- ng-binding"
                    href="#"
                    onClick={() => setShowPassword(!showPassword)}
                    label-translate="showPassword"
                    aria-label="Show password"
                  >
                    Show
                  </a>
                </span>
                {hasSubmitted && !validPassword && (
                  <span className="help-block" role="alert">
                    Please enter your password{" "}
                  </span>
                )}
                <Link to={process.env.PUBLIC_URL + "/ps/forgot-password"}>
                  Forgot your password?
                </Link>
                <br />
              </div>
              <div className="button-holder">
                <button
                  type="submit"
                  className="btn btn-primary btn-wide ng-binding"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 ng-scope" ng-if="!hideCreateOption"></div>
          <div
            className="col-md-4 signin-divider"
            style={{ borderColor: "transparent" }}
          >
            <p>
              Need help? <a href="#/contact-us">Contact Us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
