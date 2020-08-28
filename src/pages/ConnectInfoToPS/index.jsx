import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "on-ds";

import { PS_HOME } from "../../constants/routes";

import ProgressBar from "../../components/ProgressBar";

const ConnectInfoToPS = (props) => {
  const history = useHistory();

  return (
    <div className="connect-info-to-ps">
      <ProgressBar percent="50" />
      <h1>Connect your information to a Public Secure account</h1>

      <p>
        Public Secure is the Ontario Government’s technology solution for
        signing in to government services.
      </p>
      <p>
        The following steps will momentarily take you away from the Ontario
        Autism Program to Public Secure where you can sign in or{" "}
        <b>create an account for yourself</b>.
      </p>
      <p>
        Once you have signed in, the information associated with your OAP number
        will be connected and you will be redirected back to the OAP Online
        Services.
      </p>

      <Button
        data={{ id: "go-to-ps", text: "Go to Public Secure", skin: "primary" }}
        onClickHandler={() => history.push(PS_HOME)}
      />
    </div>
  );
};

export default ConnectInfoToPS;
