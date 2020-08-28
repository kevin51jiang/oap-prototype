import React from "react";
import { CHILD_HAS_SCHOOL } from "../../constants/routes";
import { RadioGroup, Radio, Input, Button } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { useHistory } from "react-router-dom";
import DatePicker from "../../components/DatePicker";

const ChildInformation = () => {
  const history = useHistory();
  return (
    <>
      <h1>Child information</h1>

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
      <h3>Gender identity</h3>
      <RadioGroup>
        <Radio name="gender" val="Male" />
        <Radio name="gender" val="Female" />
        <Radio name="gender" val="Other" />
        <Radio name="gender" val="Prefer not to say" defaultChecked />
      </RadioGroup>
      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(CHILD_HAS_SCHOOL);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default ChildInformation;
