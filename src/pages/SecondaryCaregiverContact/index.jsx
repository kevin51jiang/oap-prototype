import React from "react";
import { Button, Input } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { CHILD_INFORMATION } from "../../constants/routes";
import { useHistory } from "react-router-dom";

const SecondaryCaregiverContact = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Secondary caregiver contact information</h1>
      <label>
        <h3>Email</h3>
      </label>
      <Input
        data={{
          id: "email",
          char: "20",
        }}
      />

      <label>
        <h3>Phone</h3>
      </label>
      <Input
        data={{
          id: "phone",
          char: "20",
        }}
      />

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(CHILD_INFORMATION);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default SecondaryCaregiverContact;
