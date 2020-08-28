import React, { useState } from "react";

import { Button, RadioGroup, Radio } from "on-ds";
import { PRIMARY_CAREGIVER_DETAILS } from "../../constants/routes";

import { useHistory } from "react-router-dom";

const RegisterFor = () => {
  const [registeringFor, setRegisteringFor] = useState("");

  const history = useHistory();
  return (
    <>
      <h2>Are you registering for yourself or for a child?</h2>

      <RadioGroup>
        <Radio
          val="Yourself"
          name="register-for"
          onChange={() => setRegisteringFor("yourself")}
        />
        <Radio
          val="A child"
          name="register-for"
          defaultChecked
          onChange={() => setRegisteringFor("child")}
        />
      </RadioGroup>

      <Button
        data={{
          id: "next",
          text: "Next step",
          skin: "primary",
        }}
        onClickHandler={() => {
          history.push(PRIMARY_CAREGIVER_DETAILS);
        }}
      />
    </>
  );
};

export default RegisterFor;
