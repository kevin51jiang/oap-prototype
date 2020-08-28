import React from "react";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { Button, Input } from "on-ds";
import { useHistory } from "react-router-dom";
import {
  REGISTRATION_UPLOAD_DOCS,
  REGISTRATION_REVIEW_INFO,
  UPLOAD_DOCUMENTS,
} from "../../constants/routes";

const ChildSchoolDetails = () => {
  const history = useHistory();
  return (
    <>
      <h1>Child's school information</h1>

      <label>
        <h3>School board</h3>
      </label>
      <Input
        data={{
          id: "school-board",
          char: "20",
        }}
      />

      <label>
        <h3>School name</h3>
      </label>
      <Input
        data={{
          id: "school-name",
          char: "20",
        }}
      />

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          // TODO
          // Temporarily skip upload docs, move to review info
          // history.push(REGISTRATION_UPLOAD_DOCS);
          history.push(UPLOAD_DOCUMENTS);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default ChildSchoolDetails;
