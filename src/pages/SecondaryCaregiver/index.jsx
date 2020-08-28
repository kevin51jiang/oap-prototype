import React from "react";

import { Input, Button } from "on-ds";
import { useHistory } from "react-router-dom";
import DatePicker from "../../components/DatePicker";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { SECONDARY_CAREGIVER_ADDRESS } from "../../constants/routes";
const SecondaryCaregiver = () => {
  const history = useHistory();
  return (
    <>
      <h1>Secondary caregiver</h1>

      <label>
        <h3>First name</h3>
      </label>
      <Input
        data={{
          id: "first-name",
          char: "20",
        }}
      />

      <label>
        <h3>Last name</h3>
      </label>
      <Input
        data={{
          id: "last-name",
          char: "20",
        }}
      />

      <label>
        <h3>Date of birth</h3>
      </label>
      <DatePicker />

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(SECONDARY_CAREGIVER_ADDRESS);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default SecondaryCaregiver;
