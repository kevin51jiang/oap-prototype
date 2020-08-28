import React, { useState } from "react";
import { Input, Button } from "on-ds";
import { Checkbox } from "antd";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import SecondaryConsent from "./SecondaryConsent";

const ParentSecondaryConsent = () => {
  const [primDone, setPrimDone] = useState(false);
  const PrimConsent = () => (
    <>
      <h1>Provide primary caregiver consent</h1>

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

      <table className="checkbox-table">
        <tr>
          <td>
            <Checkbox />
          </td>
          <td>
            <p>
              By selecting this checkbox, I, the Primary Caregiver, consent to
              the disclosure of personal information by the Ministry to the
              alternate caregiver named in this application as it relates to my
              child/youth’s Ontario Autism Program Interim One-Time Funding.
            </p>
          </td>
        </tr>
      </table>
      <label>Primary Caregiver name</label>
      <Input data={{ id: "caregiver-name", char: "20" }} />

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          setPrimDone(true);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );

  return !primDone ? <PrimConsent /> : <SecondaryConsent />;
};

export default ParentSecondaryConsent;
