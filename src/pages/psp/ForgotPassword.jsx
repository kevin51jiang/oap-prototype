import React, { useState } from "react";

import "./ForgotPassword.scss";
import { useEffect } from "react";

import firebase from "firebase";

const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState();
  const [emailTouch, setEmailTouch] = useState(false);

  useEffect(() => {
    if (emailPattern.test(email)) {
      //valid email
      setValidEmail(true);
    } else {
      //invalid email
      setValidEmail(false);
    }
  }, [email]);

  const onSubmit = (e) => {
    // used to ensure a cached version of the function is not run
    Math.random();

    e.persist();
    e.preventDefault();
    console.log(e);

    const email = e.target[0].value;
    if (validEmail) {
      console.log("valid email");

      // todo prototype screen after sending reset email
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .catch((err) => console.log("Firebase err", err));
    }
  };

  return (
    <div className="forgot-password">
      <h3>Recover your password</h3>
      <hr />

      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="email">Email</label>

        <div className="email-input">
          <input
            type="email"
            id="email"
            className={
              "form-control ontario-columns ontario-small-12 ontario-medium-4 " +
              (emailTouch && !validEmail ? " form-err" : "")
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailTouch(true)}
          />
          {emailTouch &&
            !validEmail &&
            (email === "" ? (
              <span className="help-block ng-binding ng-hide" role="alert">
                Please enter your email address{" "}
              </span>
            ) : (
              <span className="help-block ng-binding ng-hide" role="alert">
                Your email must be in this format: username@example.com
              </span>
            ))}
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-wide">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
