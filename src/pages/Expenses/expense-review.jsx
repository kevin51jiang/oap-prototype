import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import { MANAGE_EXPENSES, LANDING, EXPENSE_ADDED } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/dropdown";
import { useStore2 } from "../../constants/stores";
import ExpenseCard from "../../components/ExpenseCard";

const ExpenseReview = (props) => {
    const history = useHistory();
    const state = {
      expenseCats: [
        {value: "Invoice/receipt #:", display: "Invoice/receipt #:"},
        {value: "Invoice/receipt date:", display: "Invoice/receipt date:"},
        {value: "Name of organization:", display: "Name of organization:"},
        {value: "Individual service provider:", display: "Individual service provider:"},
        {value: "Category", display: "Category"},
        {value: "Subcategory", display: "Subcategory"},
        {value: "Expense description", display: "Expense description"},
        {value: "Amount (with tax):", display: "Amount (with tax):"}
      ],
    };
    const store = useStore2();
    const calloutMessageOne = () => {
    return (
      <div className="full-width open-sans">
        <p>
          <b>Category:</b>
        </p>
        <p>{store.expenseCard.cat}</p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Subcategory:</b>
        </p>
        <p>{store.expenseCard.subCat}</p>
      </div>
    );
  };
  const calloutMessageTwo = () => {
    return (
      <div className="full-width open-sans">
        <p>
          <b>Organization:</b>
          <p>{store.expenseCard.company}</p>
        </p>

        <hr className="border-line-fun"></hr>
        <p>
          <b>Name:</b>
          <p>{store.expenseCard.name}</p>
        </p>

        <hr className="border-line-fun"></hr>
        <p>
          <b>Title:</b>
          <p>{store.expenseCard.title}</p>
        </p>

        <hr className="border-line-fun"></hr>
        <p>
          <b>Reg #:</b>
          <p>{store.expenseCard.register}</p>
        </p>
      </div>
    );
  };
  const calloutMessageThree = () => {
    return (
      <div className="full-width open-sans">
        <p>
          <b>Invoice/receipt #:</b>
          <p>{store.expenseCard.invoiceNum}</p>
          <hr className="border-line-fun"></hr>
        </p>
        <p>
          <b>Invoice/receipt date:</b>
          <p>
            {store.expenseCard.year +
              "/" +
              store.expenseCard.month +
              "/" +
              store.expenseCard.day}
          </p>
          <hr className="border-line-fun"></hr>
        </p>
        <p>
          <b>Expense description:</b>
          <p>{store.expenseCard.desc}</p>
          <hr className="border-line-fun"></hr>
        </p>
        <p>
          <b>Amount (with tax):</b>
          <p>{"$" + store.expenseCard.amount.toFixed(2)}</p>
        </p>
      </div>
    );
  };

  const data = [
      {type: "receipt-number", title:"Invoice/receipt date:", message:""}


  ]
  return (
    <>
      <ProgressBar percent={90} />
      <h1>Review expense</h1>
      <h5>Category details</h5>
      <Callout
        className="callout-css"
        data={{
          type: "success",
          message: calloutMessageOne(),
        }}
      />
      <br></br>
      <h5>Service provider details</h5>
      <Callout
        className="callout-css"
        data={{
          type: "success",
          message: calloutMessageTwo(),
        }}
      />
      <br></br>
      <h5>Expense details</h5>
      <Callout
        className="callout-css"
        data={{
          type: "success",
          message: calloutMessageThree(),
        }}
      />
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Add expense",
        }}
        onClickHandler={() => {
          history.push(MANAGE_EXPENSES);
          store.totalAmt += parseFloat(store.expenseCard.amount);
          store.enteredExpenses.push(
            <ExpenseCard
              category={store.expenseCard.cat}
              subcategory={store.expenseCard.subCat}
              amount={store.expenseCard.amount}
              date={new Date(store.expenseCard.year, store.expenseCard.month, store.expenseCard.day)}
            />
          );
        }}
        disabled={false}
      />
    </>
  );
};

export default ExpenseReview;


// Callout.propTypes = {
//   className: PropTypes.string,
//   data: PropTypes.shape({
//     type: PropTypes.string,
//     title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//     message: PropTypes.element,
//   }),
// };