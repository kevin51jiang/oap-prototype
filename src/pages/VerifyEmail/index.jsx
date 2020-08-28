import React, { useState } from "react";
import { Input, Button } from "on-ds";

import { useHistory } from "react-router-dom";

import { CONNECT_INFO_TO_PS_ACCOUNT, DASHBOARD } from "../../constants/routes";

import ProgressBar from "../../components/ProgressBar";
import { useStore1, useGlobalStore } from "../../constants/stores";

const VerifyEmail = (props) => {
  const [verificationCode, setVerificationCode] = useState("");

  const history = useHistory();

  const store1 = useStore1();
  const global = useGlobalStore();

  const sendCode = () => {
    console.log("resending code to ", props.email);
    store1.generateAndSendVerificationCode();
  };
  return (
    <>
      <ProgressBar percent="30" />
      <h1>
        {global.flow === 1
          ? "Check the email you registered with OAP"
          : "Check your email"}
      </h1>

      <p className="ontario-lead-statement">
        We sent an verification code to your email address. Please enter your
        code below.
      </p>
      <span
        style={{ display: "block" }}
        className="ontario-margin-bottom-24-! "
      >
        <a href="#" onClick={sendCode}>
          Resend code
        </a>
      </span>

      <label htmlFor="verification-code">6-digit code</label>
      <Input
        data={{ id: "verification-code", char: "7", value: verificationCode }}
        onChange={(e) => setVerificationCode(e.target.value)}
      />

      <Button
        data={{ id: "next", text: "next", skin: "primary" }}
        onClickHandler={() => {
          if (verificationCode.length === 6) {
            history.push(
              global.flow === 2 ? DASHBOARD : CONNECT_INFO_TO_PS_ACCOUNT
            );
          }
        }}
      />
    </>
  );
};

export default VerifyEmail;
