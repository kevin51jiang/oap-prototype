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
import { useStore2 } from "../../constants/stores";

const ExpenseLanding = (props) => {
  const history = useHistory();
  const store = useStore2();
  return (
    <>
      <h1>Manage expenses</h1>
      <p>
        All new expenses you add will be saved below until you finalize and
        submit them
      </p>
      <br />
      <h3>2020-21 expenses</h3>
      <p style={{ float: "left" }}>Interim one-time funding amount</p>
      <p style={{ float: "right" }}>$5,000.00</p>

      <a href="#expenses-entered" style={{ float: "left" }}>Expenses Entered</a>
      <p style={{ float: "right" }}>
        {"$" + store.totalAmt.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>

      <p style={{ float: "left", clear: "both" }}>Remaining amount</p>
      <p style={{ float: "right" }}>
        {"$" +
          (5000.0 - store.totalAmt)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>

      <p style={{ float: "left", clear: "both" }}>Expenses due</p>
      <p style={{ float: "right" }}>April 23, 2021</p>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Enter a new expense",
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="existing-container ontario-rows">
        <br />
        <h3>Submit all expenses entered for this funding period</h3>
        <p>
          When you're ready to submit your expenses you can do so by clicking
          "review and submit all expenses".{" "}
          <b>This is a one time action that cannot be undone.</b>
        </p>
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
          disabled={false}
        />
        <br />
        <br />
        <br />
        <br />

        <h3 id="expenses-entered">Expenses entered</h3>
        <>
          {store.enteredExpenses.length === 0 && (
            <p>You have not added any expenses yet</p>
          )}
        </>
        {store.enteredExpenses}
        <p style={{ visibility: "hidden" }}>Brings grey background</p>
      </div>
    </>
  );
};

export default ExpenseLanding;
