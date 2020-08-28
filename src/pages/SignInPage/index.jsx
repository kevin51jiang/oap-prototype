import React from "react";
import { useHistory } from "react-router-dom";
import {
  SIGN_IN_AUTH_APP,
  SIGN_IN_EMAIL_LINK,
  SIGN_IN_EMAIL_PASS,
  LANDING,
} from "../../constants/routes";

const SignInPage = (props) => {
  const history = useHistory();
  return (
    <div className="sign-in-page">
      <h1>Sign in page</h1>
      <span>Please choose an option</span>

      <ul>
        <li>
          <button onClick={() => history.push(LANDING)}>
            Authentication app
          </button>
        </li>
        <li>
          <button onClick={() => history.push(SIGN_IN_EMAIL_PASS)}>
            Email and password
          </button>
        </li>
        <li>
          <button onClick={() => history.push(SIGN_IN_EMAIL_LINK)}>
            Email link
          </button>
        </li>
        <li>
          <button onClick={() => history.push(LANDING)}>SMS</button>
        </li>
      </ul>
    </div>
  );
};

export default SignInPage;
