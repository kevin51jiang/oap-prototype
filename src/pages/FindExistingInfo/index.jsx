import React from "react";

import { Accordion, Callout, Input, Button } from "on-ds";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import ProgressBar from "../../components/ProgressBar";

import {
  CONFIRM_DETAILS,
  CONNECT_INFO_TO_PS_ACCOUNT,
} from "../../constants/routes";

import "./index.scss";
import { useStore1 } from "../../constants/stores";
import DatePicker from "../../components/DatePicker";

const FindExistingInfo = (props) => {
  const [clientId, setClientId] = useState("");

  const store1 = useStore1();

  const [numChildren, setNumChildren] = useState(1);

  const history = useHistory();

  const Child = ({ num }) => (
    <div className="ontario-row">
      <div className="ontario-columns">
        <h2 style={{ float: "left", display: "inline-block" }}>
          Child {num + 1} details
        </h2>

        {num !== 0 && (
          <a
            style={{ float: "right" }}
            onClick={() => setNumChildren(numChildren - 1)}
          >
            Remove
          </a>
        )}
      </div>

      <div className="ontario-columns">
        <label htmlFor={`clientId-${num}`}>OAP number</label>
        <Input
          data={{
            id: `clientId-${num}`,
            char: "20",
            name: "clientId",
          }}
        />
      </div>

      <div className="ontario-columns">
        <label>
          <h3>Date of birth</h3>
        </label>
        <DatePicker />
      </div>

      <div className="ontario-columns">
        <label>
          <h3>Postal code</h3>
        </label>
        <Input
          data={{
            id: `postal-${num}`,
            char: "20",
            name: "postal",
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="find-existing-info">
      <ProgressBar percent="10" />
      <h1>Enter the registered OAP number(s)</h1>

      <p>You can find this on the letter inviting you to apply for funding.</p>
      <div>
        <li>
          If you were invited to apply for Interim One-Time Funding, it is
          called the OAP Client Reference Number on the letter.{" "}
        </li>
        <p>example: OAP0005121 or 864213</p>
      </div>

      <div>
        <li>
          If you were invited to apply for Childhood Budget, it is called the
          OAP Reference Number on the letter.{" "}
        </li>
        <p>example: B-02-0067</p>
      </div>

      <p>
        Please include all formatting, such as hyphens, when entering this
        reference number.
      </p>

      {Array(numChildren)
        .fill()
        .map((val, ind) => (
          <Child num={ind} />
        ))}

      <Button
        data={{ id: "next-page", skin: "secondary", text: "Add another child" }}
        onClickHandler={() => {
          setNumChildren(numChildren + 1);
        }}
      />

      <Button
        data={{ id: "next-page", skin: "primary", text: "Next" }}
        onClickHandler={() => {
          history.push(CONNECT_INFO_TO_PS_ACCOUNT);
        }}
      />
    </div>
  );
};

export default FindExistingInfo;
