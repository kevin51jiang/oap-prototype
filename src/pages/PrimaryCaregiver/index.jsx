import React from "react";
import DatePicker from "../../components/DatePicker";
import { Input, Button } from "on-ds";
import { useHistory } from "react-router-dom";
import { PRIMARY_CAREGIVER_DETAILS } from "../../constants/routes";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
const PrimaryCaregiver = () => {
  const history = useHistory();
  return (
    <>
      <h1>Primary caregiver</h1>

      <label>First name</label>
      <Input
        data={{
          id: "first-name",
          char: "20",
        }}
      />

      <label>Last name</label>
      <Input
        data={{
          id: "last-name",
          char: "20",
        }}
      />
      <label>Date of birth</label>
      <DatePicker />

      <Button
        data={{
          id: "next-step",
          skin: "primary",
          text: "Next step",
        }}
        onClickHandler={() => history.push(PRIMARY_CAREGIVER_DETAILS)}
      />
      <SaveAndFinishLater />
    </>
  );
};

export default PrimaryCaregiver;
