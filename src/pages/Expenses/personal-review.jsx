import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import {
  MANAGE_EXPENSES,
  LANDING,
  EXPENSE_ADDED,
} from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/dropdown";

const PersonalReview = (props) => {
  const history = useHistory();
  const state = {
  };
  const calloutMessageOne = () => {
    return (
      <div className="full-width">
        <p>
          <b>Name:</b> Aidan Cotton
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Date of birth:</b> May 7, 1975
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>House Address:</b> 123 Ottawa Road, Ottawa ON, K2J 0K6
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Mailing Address:</b> 123 Ottawa Road, Ottawa ON, K2J 0K6
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Email:</b> aidan.cotton@gmail.com
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Phone:</b> (613) 123-1234)
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Preferred method of communication:</b> Email
        </p>
      </div>
    );
  };
  const calloutMessageTwo = () => {
    return (
      <div className="full-width">
        <p>
          <b>Name:</b>
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Title:</b>
        </p>
        <hr className="border-line-fun"></hr>
        <p>
          <b>Reg #:</b>
        </p>
      </div>
    );
  };
  const calloutMessageThree = () => {
    return (
      <div className="full-width">
        <p>
          <b>Invoice/receipt #:</b>
          <hr className="border-line-fun"></hr>
        </p>
        <p>
          <b>Invoice/receipt date:</b>
          <hr className="border-line-fun"></hr>
        </p>
        <p>
          <b>Expense description:</b>
          <hr className="border-line-fun"></hr>
        </p>
        <p>
          <b>Amount (with tax):</b>
        </p>
      </div>
    );
  };

  const data = [
    { type: "receipt-number", title: "Invoice/receipt date:", message: "" },
  ];
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
          history.push(EXPENSE_ADDED);
        }}
        disabled={false}
      />
    </>
  );
};

export default PersonalReview;

// Callout.propTypes = {
//   className: PropTypes.string,
//   data: PropTypes.shape({
//     type: PropTypes.string,
//     title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//     message: PropTypes.element,
//   }),
// };
