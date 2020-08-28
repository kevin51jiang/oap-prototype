import React, { useState } from "react";
import "../../constants/schemas";
import "./index.scss";
import ReactDOM from "react-dom";
import {
  MANAGE_EXPENSES,
  LANDING,
  EXPENSE_DETAILS,
  ADD_SERVICE_PROVIDER,
} from "../../constants/routes";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioDrop from "../Expenses/dropdown";
import { AiFillMinusCircle } from "react-icons/ai";
import { useStore2 } from "../../constants/stores";

const ExpenseProviderAlt = (props) => {
  const history = useHistory();
  const store = useStore2();

    const [org, setOrg] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [register, setRegister] = useState("");

  return (
    <>
      <ProgressBar percent={60} />
      <h1>Select or add a new service provider</h1>
      <p>Choose from service providers you have previously added</p>
      <div class="ontario-form-group">
        <select
          class="ontario-input ontario-dropdown"
          id="dropdown-list-example"
          name="dropdown-list-example"
          style={{ marginBottom: "0px" }}
        >
          <option value=""></option>
        </select>
        <a>Manage existing service providers</a>
      </div>
      <br></br>
      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "secondary",
          id: "apply-for-funding",
          text: (
            <p className="ontario-margin-bottom-0-!">
              <AiFillMinusCircle /> Cancel adding service provider
            </p>
          ),
        }}
        onClickHandler={() => {
          history.push(ADD_SERVICE_PROVIDER);
        }}
      />
      <br></br>
      <br></br>
      <br></br>
      <h5>Name of organization</h5>

      <div class="ontario-form-group">
        <input
          class="ontario-input ontario-input--20-char-width"
          type="text"
          id="text-input-example-width-20"
          onChange={(e) => {
            setOrg(e.target.value);
            store.company = org;
          }}
        />
      </div>

      <h5>Individual service provider</h5>
      <p>
        <b>Name</b>
      </p>

      <div class="ontario-form-group">
        <input
          class="ontario-input ontario-input--20-char-width"
          type="text"
          id="text-input-example-width-20"
          onChange={(e) => {
            setName(e.target.value);
            store.name = name;
          }}
        />
      </div>

      <p>
        <b>Title</b>
      </p>
      <div class="ontario-form-group">
        <input
          class="ontario-input ontario-input--20-char-width"
          type="text"
          id="text-input-example-width-20"
          onChange={(e) => {
            setTitle(e.target.value);
            store.title = title;
          }}
        />
      </div>
      <p>
        <b>Reg #</b>
      </p>
      <div class="ontario-form-group">
        <input
          class="ontario-input ontario-input--20-char-width"
          type="text"
          id="text-input-example-width-20"
          onChange={(e) => {
            setRegister(e.target.value);
            store.registrationNum = register;
          }}
        />
      </div>

      <Button
        className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! myButtonNew"
        data={{
          skin: "primary",
          id: "apply-for-funding",
          text: "Add provider",
        }}
        onClickHandler={() => {
          history.push(EXPENSE_DETAILS);
          store.expenseCard.company = org;
          store.expenseCard.name = name;
          store.expenseCard.title = title;
          store.expenseCard.register = register;
        }}
        disabled={false}
      />
    </>
  );
};

export default ExpenseProviderAlt;
