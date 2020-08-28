import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import { MANAGE_EXPENSES, LANDING, EXPENSE_CATEGORY, MANAGE_EXPENSES_ALT } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/dropdown";

const ExpenseSubmit = (props) => {
  const calloutMessage = () => {
    return (
        <h2>New expense added</h2>
    );
  };
  const history = useHistory();

  return (
    <>
      <h3>Review expense</h3>
      <Callout
        data={{
          type: "success",
          message: calloutMessage(),
        }}
      />
      <br></br>
      <h3>Speech and language pathology ($700.00)</h3>
      <p>Added on August 20, 2020, at 1:34 PM.</p>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Back to expenses",
        }}
        onClickHandler={() => {
          history.push(MANAGE_EXPENSES_ALT);
        }}
        disabled={false}
      />
      <br></br>
      <br></br>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "secondary",
          id: "apply-for-funding",
          text: "Add another expense",
        }}
        onClickHandler={() => {
          history.push(EXPENSE_CATEGORY);
        }}
        disabled={false}
      />
    </>
  );
};

export default ExpenseSubmit;
