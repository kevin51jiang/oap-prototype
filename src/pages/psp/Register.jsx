import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import firebase from "firebase";

import "./Register.scss";
import { PS_SECURITYQUESTIONS, PS_CHECK_EMAIL } from "../../constants/routes";
import { useGlobalStore } from "../../constants/stores";

const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*(\)\-_=+[\]{}|:;'<\/?]).{8,}$/;

const PasswordReq = ({ password, hasFulfilled, message }) => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (password === "") {
      setStatus(0);
      return;
    }

    if (hasFulfilled(password)) {
      setStatus(1);
    } else {
      setStatus(-1);
    }
  }, [password, hasFulfilled]);

  return (
    <>
      {status === 1 ? (
        <span role="img">✅</span>
      ) : status === -1 ? (
        <span role="img">❌</span>
      ) : (
        ""
      )}{" "}
      {message}
    </>
  );
};

const EmailUsage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="email-usage">
      <a onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "–" : "+"} How will this email be used?
      </a>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <span style={{ fontWeight: "bold" }}>This email will be used to:</span>
        <ul>
          <li>Sign In</li>
          <li>Recover your password</li>
          <li>Get notifications about your My Ontario account</li>
        </ul>
      </div>
    </div>
  );
};

const Register = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouch, setEmailTouch] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [error, setError] = useState();
  const store = useGlobalStore();
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
    if (passwordPattern.test(password)) {
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
    console.log("submit");
    if (validEmail) {
      const email = e.target[0].value;
      const pass = e.target[1].value;

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          if (store.flow === 3 || store.flow === 1) {
            history.push(PS_CHECK_EMAIL);
          } else {
            history.push("/ps/security-questions");
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log("error", error);

          // simulate loading screen
          // also have user response for each time submitting
          setTimeout(() => {
            setError(false);
            setTimeout(() => {
              setError(errorMessage);
            }, 1000);
          }, 0);
        });
    }
  };

  // // temporarily allow pushing while not entering anything
  // const submitForm = (e) => {
  //   history.push(PS_SECURITYQUESTIONS);
  // };

  return (
    <div className="register">
      <h2>Create My Ontario login</h2>
      <hr />

      {error && <div className="alert alert-danger ">{error}</div>}
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={
            "form-control" + (emailTouch && !validEmail ? " form-err" : "")
          }
          onFocus={() => setEmailTouch(true)}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <EmailUsage />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={"form-control"}
          value={password}
        />
        <div className="password-reqs">
          <span className="title">Your password must have:</span>
          <ul>
            <li>
              <PasswordReq
                password={password}
                message="At least 8 characters total"
                hasFulfilled={(str) => str.length >= 8}
              />
            </li>
            <li>
              <PasswordReq
                password={password}
                message="1 number"
                hasFulfilled={(str) => /[0-9]/.test(str)}
              />
            </li>
            <li>
              <PasswordReq
                password={password}
                message="1 upper case letter"
                hasFulfilled={(str) => /[A-Z]/.test(str)}
              />
            </li>
            <li>
              <PasswordReq
                password={password}
                message="1 lower case letter"
                hasFulfilled={(str) => /[a-z]/.test(str)}
              />
            </li>
            <li>
              <PasswordReq
                password={password}
                message="1 special character (`~!@#$%^&*()-_=+[]{}|:;'</?)"
                hasFulfilled={(str) =>
                  /[`~!@#$%^&*(\)\-_=+[\]{}|:;'<\/?]/.test(str)
                }
              />
            </li>
          </ul>
        </div>

        <button type="submit" className="btn btn-primary btn-wide">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Register;
