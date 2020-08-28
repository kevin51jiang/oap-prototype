import React, { useState } from "react";
import "../../constants/schemas";
import "./upload-doc.scss";
import ReactDOM from "react-dom";
import {
  MANAGE_EXPENSES,
  LANDING,
  REVIEW_EXPENSE,
  REGISTRATION_REVIEW_INFO,
} from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import { useStore2 } from "../../constants/stores";
import DocSvg from "../../ds/icons/svg/ontario-icon-document.svg"
import DocCan from "../../ds/icons/svg/ontario-icon-delete.svg";

const UploadDocuments = (props) => {
  const history = useHistory();
  const store = useStore2();

  return (
    <div>
      <ProgressBar percent={75} />
      <h1>1. Proof of diagnosis</h1>
      <p>
        Written diagnosis of autism from a qualified professional that includes:{" "}
      </p>
      <ul>
        <li>your child’s full name and date of birth</li>
        <li>the date of your child's assessment</li>
        <li>
          a statement indicating that the child meets the diagnostic criteria
          for autism spectrum disorder
        </li>
        <li>the qualified professional’s name and credentials</li>
      </ul>

      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Choose a file from device",
          type: "file",
        }}
      />
      <br></br>
      <br></br>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 myButton gray-button"
        data={{
          skin: "tertiary",
          id: "apply-for-funding",
          text: (
            <p className="ontario-margin-bottom-0-!">
              <img src={DocSvg} alt="Document Icon" /> diagnosis.pdf{" "}
              <img
                src={DocCan}
                style={{ float: "right", marginTop: "4px" }}
                alt="Delete Button"
              />
            </p>
          ),
        }}
        // onClickHandler={() => {
        //   history.push(ADD_SERVICE_PROVIDER);
        // }}
      />

      <h1>2. Proof of date of birth</h1>
      <p>Accepted documentation is as follows: </p>
      <ul>
        <li>Birth certificate</li>
        <li>Valid passport (not more expired than 5 years</li>
        <li>
          Valid permanent resident card or permanent resident card not more
          expired than 5 years
        </li>
        <li>Certificate of Indian Status</li>
        <li>Registered Indian Record</li>
      </ul>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Choose a file from device",
        }}
      />
      <br></br>
      <br></br>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 myButton gray-button"
        data={{
          skin: "tertiary",
          id: "apply-for-funding",
          text: (
            <p className="ontario-margin-bottom-0-!">
              <img src={DocSvg} alt="Document Icon" /> passport.pdf{" "}
              <img
                src={DocCan}
                style={{ float: "right", marginTop: "4px" }}
                alt="Delete Button"
              />
            </p>
          ),
        }}
        // onClickHandler={() => {
        //   history.push(ADD_SERVICE_PROVIDER);
        // }}
      />

      <h1>3. Proof of residency</h1>
      <p>Accepted documentation is as follows: </p>
      <ul>
        <li>School report card</li>
        <li>Ontario Driver's licence</li>
        <li>Temporary Driver's licence</li>
        <li>Ontario photo card</li>
        <li>Employer record</li>
        <li>Utility bill</li>
      </ul>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Choose a file from device",
        }}
      />
      <br></br>
      <br></br>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 myButton gray-button"
        data={{
          skin: "tertiary",
          id: "apply-for-funding",
          text: (
            <p className="ontario-margin-bottom-0-!">
              <img src={DocSvg} alt="Document Icon" /> reportcard.pdf{" "}
              <img
                src={DocCan}
                style={{ float: "right", marginTop: "4px" }}
                alt="Delete Button"
              />
            </p>
          ),
        }}
        // onClickHandler={() => {
        //   history.push(ADD_SERVICE_PROVIDER);
        // }}
      />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <Button
        className="ontario-columns ontario-small-12 myButton"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Next step"
        }}
        onClickHandler={() => {
          history.push(REGISTRATION_REVIEW_INFO);
        }}
      />
      <br></br>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 myButton"
        data={{
          skin: "secondary",
          id: "apply-for-funding",
          text: "Save and finish later"
        }}
      />
    </div>
  );
};

export default UploadDocuments;
