import React, { useState } from "react";
import { Input, Button } from "on-ds";
import { Checkbox } from "antd";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import SecondaryConsent from "./SecondaryConsent";

const ChildSecondaryConsent = () => {
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
            <p>
              By selecting this checkbox, I, <b>the Child/Youth</b> named in
              this application, consent to the collection and use of my personal
              information by the Ministry for the purposes of confirming
              eligibility for the Ontario Autism Program, to determine the
              amount of funding I am eligible for, and for the ongoing planning,
              administration, monitoring and evaluation of the Ontario Autism
              Program.
            </p>
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
              By selecting this checkbox, I, <b>the Primary Caregiver</b>,
              consent to the disclosure of personal information by the Ministry
              to the alternate caregiver named in this application as it relates
              to my child/youth’s Ontario Autism Program Interim One-Time
              Funding.
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

export default ChildSecondaryConsent;
