import React from "react";
import ExpenseCard from "../../components/ExpenseCard";
import { Callout, Button } from "on-ds";
import "../../constants/schemas";
import "./index.scss";
import {
  EXPENSE_CATEGORY,
  REVIEW_PERSONAL_DETAILS,
} from "../../constants/routes";
import { useHistory } from "react-router-dom";

import "./expense-manage.scss";

const ExpenseManaged = (props) => {
  const history = useHistory();
  return (
    <div className="expense-manage">
      <h1>Manage expenses</h1>
      <p>
        All new expenses you add will be saved below until you finalize and
        submit them
      </p>
      <br />
      <h3>2020-21 expenses</h3>
      <div className="expense-line">
        <p className="desc">Interim one-time funding amount</p>
        <p className="val">$5,000</p>
      </div>
      <div className="expense-line">
        <p className="desc">Remaining amount</p>
        <p className="val">$4,300</p>
      </div>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Add an expense",
        }}
        onClickHandler={() => {
          history.push(EXPENSE_CATEGORY);
        }}
        disabled={false}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "secondary",
          id: "apply-for-funding",
          text: "Review and submit all expenses",
        }}
        onClickHandler={() => {
          history.push(REVIEW_PERSONAL_DETAILS);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <div className="ontario-row existing-container">
        <h3 className="existing-text">Existing Expenses</h3>

        <ExpenseCard
          category="Other therapies and specialized services"
          subcategory="Speech and language pathology"
          amount={700}
          date={new Date()}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ExpenseManaged;
