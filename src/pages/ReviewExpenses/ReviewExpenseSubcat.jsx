import React from "react";

import ExpenseCard from "../../components/ExpenseCard";
import { useHistory } from "react-router-dom";
import {
  REVIEW_EXPENSE_SINGULAR,
  REVIEW_EXPENSES_FINAL,
} from "../../constants/routes";
import { Button } from "on-ds";

const receiptDate = new Date(2020, 5, 30);

const ReviewExpenseSubcat = (props) => {
  const history = useHistory();
  return (
    <div className="review-expense-subcat">
      <h1>Evidence-Based Behavioural Services</h1>

      <ExpenseCard
        subcategory="Behavioural assessment"
        amount={600}
        date={receiptDate}
        onClick={() => history.push(REVIEW_EXPENSE_SINGULAR)}
        noDelete
      />
      <ExpenseCard
        subcategory="Behavioural assessment"
        amount={600}
        date={receiptDate}
        noDelete
      />
      <ExpenseCard
        subcategory="Behavioural assessment"
        amount={600}
        date={receiptDate}
        noDelete
      />

      <Button
        data={{
          id: "back",
          skin: "primary",
          text: "Return to review expenses",
        }}
        onClickHandler={() => history.push(REVIEW_EXPENSES_FINAL)}
      />
    </div>
  );
};

export default ReviewExpenseSubcat;
