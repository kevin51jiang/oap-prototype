import React, { useState } from "react";

import "./index.scss";
import { Button } from "on-ds";
import { FINALIZE_AND_SUBMIT_EXPENSES } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import { REVIEW_EXPENSE_SUBCAT } from "../../constants/routes";

import { Link } from "react-router-dom";
const ExpenseTableEntry = ({ name, amount, linkText, linkTo }) => {
  return (
    <tr>
      <td
        style={{
          verticalAlign: "top",
          paddingRight: "0.5rem",
          paddingBottom: "3rem",
        }}
      >
        {name}
      </td>
      <td style={{ verticalAlign: "top" }}>
        <table style={{ marginRight: 0, marginLeft: "auto" }}>
          <tr style={{ textAlign: "right", whiteSpace: "nowrap" }}>
            ${amount.toLocaleString()}
          </tr>
          <tr style={{ textAlign: "right", whiteSpace: "nowrap" }}>
            <Link to={linkTo ? `${linkTo}` : "#"}>
              {linkText ? linkText : "view"}
            </Link>
          </tr>
        </table>
      </td>
    </tr>
  );
};

const ReviewExpenses = (props) => {
  const history = useHistory();
  return (
    <div className="review-expenses">
      <h1>Review expenses</h1>
      <p className="ontario-margin-bottom-24-!">
        Review the expenses you’ve added carefully. After submission, they will
        no longer be editable.
      </p>

      <div className="expense-summary">
        <h3>Expense summary</h3>
        <div className="expense-line">
          <p className="desc">Interim one-time funding amount</p>
          <p className="val">$5,000</p>
        </div>
        <div className="expense-line">
          <p className="desc">Expenses being submitted</p>
          <p className="val">$5,600</p>
        </div>
      </div>

      <hr />
      <div className="expense-breakdown">
        <h3>Expense breakdown by category</h3>
        <table style={{ width: "100%" }}>
          <ExpenseTableEntry
            name="Evidence-Based Behavioral Services"
            amount={2600}
            linkText="6 receipts"
            linkTo={REVIEW_EXPENSE_SUBCAT}
          />
          <ExpenseTableEntry
            name="Other Therapies and Specialized Services"
            amount={2400}
            linkText="3 receipts"
          />
          <ExpenseTableEntry
            name="Respite"
            amount={250}
            linkText="4 receipts"
          />
          <ExpenseTableEntry
            name="Technology"
            amount={350}
            linkText="1 receipt"
          />
        </table>

        <p>
          You may be audited and be asked to provide proof of payment. Please
          keep all original invoices/receipts and other proof of payment for{" "}
          <b>seven years</b>.
        </p>
      </div>
      <Button
        data={{ id: "next", skin: "primary", text: "Next" }}
        onClickHandler={() => {
          history.push(FINALIZE_AND_SUBMIT_EXPENSES);
        }}
      />
    </div>
  );
};

export default ReviewExpenses;
