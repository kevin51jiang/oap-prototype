import React from "react";
import { Input, Button } from "on-ds";
import { Checkbox } from "antd";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { REGISTRATION_SUBMIT } from "../../constants/routes";
import { useHistory } from "react-router-dom";

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
            By selecting this checkbox, I, the Primary Caregiver, consent to the
            collection and use of the child’s personal information by the
            Ministry for the purposes of:
            <ul>
              <li>confirming eligibility for the Ontario Autism Program</li>
              <li>
                determining the amount of funding the child is eligible for
                ongoing planning, administration, monitoring and evaluation of
                the Ontario Autism Program.
              </li>
            </ul>
          </td>
        </tr>
      </table>

      <label>Caregiver name</label>
      <Input data={{ id: "caregiver-name", char: "20" }} />

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
