import React from "react";
import { Input, Button } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { REGISTRATION_SUBMIT } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import { Checkbox } from "antd";

const ChildPrimConsent = () => {
  const history = useHistory();
  return (
    <>
      <h1>Get the child to provide consent</h1>
      <table className="checkbox-table">
        <tr>
          <td>
            <Checkbox />
          </td>
          <td>
            <p>
              I consent to the collection and use of my personal information by
              the Ministry for the purposes of confirming eligibility for the
              Ontario Autism Program, to determine the amount of funding I am
              eligible for, and for the ongoing planning, administration,
              monitoring and evaluation of the Ontario Autism Program.
            </p>
          </td>
        </tr>
      </table>

      <label>Child/Youth name</label>
      <Input data={{ id: "childname", char: "20" }} />

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

export default ChildPrimConsent;
