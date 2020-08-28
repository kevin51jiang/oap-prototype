import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import { MANAGE_EXPENSES, LANDING, EXPENSE_DETAILS, ADD_SERVICE_PROVIDER_ALT } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/dropdown";
import {IoMdAddCircle} from 'react-icons/io'

const ExpenseProvider = (props) => {
  const history = useHistory();

  const state = {
    clicked: false,
  }

  return (
    <>
      <ProgressBar percent={60} />
      <h1>Select or add a new service provider</h1>
      <p>Choose from service providers you have previously added</p>
      <div class="ontario-form-group" style={{ marginBottom: "0px" }}>
        <select
          class="ontario-input ontario-dropdown"
          id="dropdown-list-example"
          name="dropdown-list-example"
          style={{ marginBottom: "0px" }}
        >
          <option value=""></option>
        </select>
        <a>Manage existing service providers</a>
      </div>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "secondary",
          id: "apply-for-funding",
          text: (
            <p className="ontario-margin-bottom-0-!">
              <IoMdAddCircle /> Add service provider
            </p>
          ),
        }}
        onClickHandler={() => {
          history.push(ADD_SERVICE_PROVIDER_ALT);
        }}
        disabled={false}
      />
      <br></br>
      <br></br>
      <br></br>

      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Next",
        }}
        onClickHandler={() => {
          history.push(EXPENSE_DETAILS);
        }}
        disabled={false}
      />
    </>
  );
};

export default ExpenseProvider;