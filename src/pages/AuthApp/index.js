import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import "src/pages/AuthApp/auth.js";

const AuthApp = () => (
  <AuthUserContext.Consumer>
    <script>generateKey();</script>
    <img id="qrcode" src=""></img>
    <script></script>
    {(authUser) => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default AuthApp;
