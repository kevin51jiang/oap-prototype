import React from "react";
import { Input, Button } from "on-ds";
import { REGISTRATION_SUBMIT } from "../../constants/routes";
import { Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
const SecondaryConsent = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Provide secondary caregiver consent</h1>

      <table className="checkbox-table">
        <tr>
          <td>
            <Checkbox />
          </td>
          <td>
            <p>
              By selecting this checkbox, I, <b>the Secondary Caregiver</b>,
              consent to the use of my personal information by the Ministry so
              that the Ministry can share information about the child/youth’s
              Ontario Autism Program Interim One-Time Funding with me when I
              make inquiries.
            </p>
          </td>
        </tr>
      </table>

      <label>Secondary Caregiver name</label>
      <Input data={{ id: "secondary-caregiver-name", char: "20" }} />

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(REGISTRATION_SUBMIT);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default SecondaryConsent;
