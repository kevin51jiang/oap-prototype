import React from "react";
import ReviewBox from "../../components/ReviewBox";

const ReviewExpenseSingular = (props) => {
  return (
    <div className="review-expense-singular">
      <h3>Behavioral assessment ($600)</h3>

      <ReviewBox title="Category details">
        <div>
          <div>
            <b>Category:</b>
          </div>
          Evidence based behavioral services
        </div>
        <div>
          <div>
            <b>Subcategory:</b>
          </div>
          Behavioural asessment
        </div>
      </ReviewBox>

      <ReviewBox title="Service provider details">
        <div>
          <div>
            <b>Name:</b>
          </div>
          Jane Doe
        </div>
        <div>
          <div>
            <b>Title:</b>
          </div>
          Behavioral assessment specialist
        </div>
        <div>
          <div>
            <b>Reg #:</b>
          </div>
          1234
        </div>
      </ReviewBox>
      <ReviewBox title="Service provider details">
        <div>
          <div>
            <b>Invoice/receipt #:</b>
          </div>
          9870654
        </div>
        <div>
          <div>
            <b>Invoice/receipt date:</b>
          </div>
          Feb 13 2020
        </div>
        <div>
          <div>
            <b>Expense description:</b>
          </div>
          One behavioral assessment on Feb 13 2020 for $600
        </div>
        <div>
          <div>
            <b>Amount (with tax):</b>
          </div>
          $ 600
        </div>
      </ReviewBox>
    </div>
  );
};

export default ReviewExpenseSingular;
