// import React from "react";
import React, { useState } from "react";
import { RadioGroup, Radio, Button } from "on-ds";
import {
  CHILD_SCHOOL_DETAILS,
  REGISTRATION_UPLOAD_DOCS,
  UPLOAD_DOCUMENTS,
} from "../../constants/routes";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { useHistory } from "react-router-dom";

const ChildHasSchool = () => {
  const history = useHistory();
  const [attendsSchool, setAttendsSchool] = useState(true);
  return (
    <>
      <h1>Does this child attend school?</h1>
      <RadioGroup>
        <Radio
          name="attends-school"
          val="Yes"
          defaultChecked
          onChange={() => setAttendsSchool(true)}
        />
        <Radio
          name="attends-school"
          val="No"
          onChange={() => setAttendsSchool(false)}
        />
      </RadioGroup>

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(attendsSchool ? CHILD_SCHOOL_DETAILS : UPLOAD_DOCUMENTS);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default ChildHasSchool;
