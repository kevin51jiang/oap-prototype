import React from "react";
import { Callout } from "on-ds";

const ReviewAndSubmitExpensesCallout = (props) => {
  return (
    <Callout
      data={{
        type: "warning",
        message: (
          <span>
            Review and submit Joel's expenses by <b>April 23, 2021</b>
          </span>
        ),
      }}
    />
  );
};

export default ReviewAndSubmitExpensesCallout;
