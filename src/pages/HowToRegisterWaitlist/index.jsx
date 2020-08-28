import React from "react";
import { Button } from "on-ds";
import { useHistory } from "react-router-dom";
import { PS_HOME } from "../../constants/routes";
import { useGlobalStore } from "../../constants/stores";

const HowToRegisterOAP = (props) => {
  const history = useHistory();

  const setFlow = useGlobalStore((state) => state.setFlow);
  return (
    <>
      <h1 className="ontario-margin-bottom-24-!">What to expect next</h1>

      <div className="ontario-margin-bottom-32-!">
        <h2>1. Create a new Public Secure account for yourself</h2>
        <p>
          Creating your account will take about <b>three minutes</b>. If you
          already have an account for yourself, please sign in. After signing in
          to your Public Secure account, you will be brought back to the OAP
          Online Services. Creating a Public Secure account will allow you to
          save your registration information as you go.
        </p>
      </div>
      <div className="ontario-margin-bottom-32-!">
        <h2>2. Fill the registration form</h2>
        <p>
          We will guide you step-by-step. This should take about{" "}
          <b>five minutes</b>.
        </p>
      </div>
      <div className="ontario-margin-bottom-32-!">
        <h2>3. Upload required documentation</h2>
        <p>
          You will be asked to provide documentation proving the following for
          the person with Autism being registered. This can be continued later
          if needed:{" "}
        </p>
        <p>
          1) Child’s diagnosis of Autism Spectrum Disorder from a qualified
          professional
        </p>
        <p>2) Child’s date of birth</p>
        <p>3) Residency in Ontario</p>

        {/* Probably need to change link to something more relevant */}
        <a href="https://www.ontario.ca/page/acceptable-identity-documents">
          <b>Learn what documentation is eligible</b>
        </a>
      </div>
      <div className="ontario-margin-bottom-32-!">
        <h2>4. Wait for approval of your child's (or your) registration</h2>
        <p>
          You will be notified via email if there are any changes to your
          child’s (or your) registration status, which can also be checked by
          signing in.
        </p>
      </div>

      <Button
        data={{ id: "get-started", skin: "primary", text: "Get started" }}
        onClickHandler={() => {
          setFlow(3);
          history.push(PS_HOME + "?reg=new");
        }}
      />
    </>
  );
};

export default HowToRegisterOAP;
