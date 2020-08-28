import React, { useState } from "react";

import { Input, RadioGroup, Radio, Button } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { useHistory } from "react-router-dom";
import { IS_WANT_SECONDARY_CAREGIVER } from "../../constants/routes";

const PrimaryCaregiverContactInfo = (props) => {
  const history = useHistory();
  return (
    <div className="primary-caregiver-contact-info">
      <h1>Primary caregiver contact information</h1>
      <label htmlFor="email">Email</label>
      <div className="ontario-row">
        <div className="ontario-columns" style={{ whiteSpace: "nowrap" }}>
          <Input
            data={{
              id: "email",

              value: "aidan.cotton@gmail.com",
            }}
            className="ontario-columns ontario-small-11 ontario-margin-right-8-!"
            disabled
          />
          <a
            style={{ display: "inline-block", lineHeight: "2.5rem" }}
            className="ontario-small-1"
          >
            Edit
          </a>
        </div>
      </div>

      <p>
        If your email used for the Ontario Autism Program differs from that of
        your Public Secure account, you’ll be asked to verify your email by
        entering a 6-digit code sent to your inbox.
      </p>

      <label>
        <h3>Phone</h3>
      </label>
      <Input
        data={{
          id: "phone",
          char: "20",
        }}
      />

      <h3>Preferred method of communication</h3>
      <RadioGroup>
        <Radio val="Email" name="contact" />
        <Radio val="Phone" name="contact" />
      </RadioGroup>
      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(IS_WANT_SECONDARY_CAREGIVER);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </div>
  );
};

export default PrimaryCaregiverContactInfo;
