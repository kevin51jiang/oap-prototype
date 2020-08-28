import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import {
  MANAGE_EXPENSES,
  LANDING,
  REVIEW_EXPENSE,
} from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/dropdown";
import { useStore2 } from "../../constants/stores";

const ExpenseDetails = (props) => {
  const history = useHistory();
  const [inv, setInv] = useState("")
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  const [amt, setAmt] = useState("");
  const store = useStore2();


  return (
    <div>
      <ProgressBar percent={75} />
      <h1>Enter your expense details</h1>
      <div className="ontario-rows ">
        <div class="ontario-form-group">
          <label class="ontario-label" for="text-input-example-width-20">
            Invoice/receipt #<span class="ontario-label__flag"></span>
          </label>
          <input
            class="ontario-input ontario-input--20-char-width"
            type="text"
            id="text-input-example-width-7"
            onChange={(e) => {
              setInv(e.target.value);
              store.invoiceNum = inv;
            }}
          />
        </div>
      </div>
      <div className="ontario-row ontario-columns">
        <h3>Invoice/receipt date</h3>
        <div class="ontario-form-group" className="floating">
          <label class="ontario-label" htmlFor="text-input-example-width-4">
            YYYY<span class="ontario-label__flag"></span>
          </label>
          <input
            class="ontario-input ontario-input--4-char-width"
            type="text"
            id="text-input-example-width-4"
            onChange={(e) => {
              setYear(e.target.value);
              store.expenseCard.year = year;
            }}
          />
        </div>
        <div class="ontario-form-group" className="floating">
          <label class="ontario-label" htmlFor="text-input-example-width-4">
            MM<span class="ontario-label__flag"></span>
          </label>
          <input
            class="ontario-input ontario-input--4-char-width"
            type="text"
            id="text-input-example-width-4"
            onChange={(e) => {
              setMonth(e.target.value);
              store.expenseCard.month = month;
            }}
          />
        </div>
        <div class="ontario-form-group" className="floating">
          <label class="ontario-label" htmlFor="text-input-example-width-4">
            DD<span class="ontario-label__flag"></span>
          </label>
          <input
            class="ontario-input ontario-input--4-char-width"
            type="text"
            id="text-input-example-width-4"
            onChange={(e) => {
              setDay(e.target.value);
              store.expenseCard.day = day;
            }}
          />
        </div>
      </div>
      <div className="ontario-row ontario-columns">
        <h3>Expense description</h3>
        <p>
          If this invoice/receipt covers multiple sessions, please include the
          number of sessions and date range in your description below.{" "}
        </p>
        <p>
          eg. 4 one hour long sessions for speech-language therapy from Jan 12th
          2020 to Feb 12th 2020.
        </p>
        <div class="ontario-form-group">
          <textarea
            class="ontario-input ontario-small-12 ontario-medium-8 box-height-change"
            type="text"
            id="text-input-example-width-20"
            onChange={(e) => {
              setDesc(e.target.value);
              store.expenseCard.desc = desc;
            }}
          />
        </div>
      </div>
      <div className="ontario-row ontario-columns">
        <h4>Amount (with tax) </h4>
        <div class="ontario-form-group">
          <input
          placeholder="$"
            class="ontario-input ontario-input--20-char-width"
            type="text"
            id="text-input-example-width-20"
            onChange={(e) => {
              setAmt(e.target.value);
            }}
          />
        </div>
      </div>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Next Step",
        }}
        onClickHandler={() => {
          history.push(REVIEW_EXPENSE);
          store.expenseCard.invoiceNum = inv;
          store.expenseCard.year = year;
          store.expenseCard.month = month;
          store.expenseCard.day = day;
          store.expenseCard.desc = desc;
          store.expenseCard.amount = parseFloat(amt);
        }}
      />
    </div>
  );
};

export default ExpenseDetails;
