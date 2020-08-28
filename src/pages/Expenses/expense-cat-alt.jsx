import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import {
  MANAGE_EXPENSES,
  LANDING,
  ADD_SERVICE_PROVIDER,
  EXPENSE_SUB_CATEGORY,
} from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/radio-cats";
import { useStore2 } from "../../constants/stores";

const ExpenseSelectAlt = (props) => {
  const history = useHistory();
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const store = useStore2();
  return (
    <div className="expense-cat">
      <ProgressBar percent={25} />
      <h1>Select expense category</h1>
      <RadioDrop
        onChange={(cat, subCat) => {
          setCat(cat);
          setSubCat(subCat);
        }}
      />
      <Button
        className="ontario-columns ontario-small-12 myButton"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Next",
        }}
        onClickHandler={() => {
          history.push(EXPENSE_SUB_CATEGORY);
          store.expenseCategory = cat;
          console.log(cat);
        }}
      />
    </div>
  );
};

export default ExpenseSelectAlt;
