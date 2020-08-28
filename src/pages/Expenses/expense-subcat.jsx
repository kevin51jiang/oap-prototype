import React, { useState } from "react";
import "../../constants/schemas";
import styles from "./index.scss";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { Callout, Button, Dropdown } from "on-ds";
import RadioSub from "../Expenses/subcat";
import { useStore2 } from "../../constants/stores";
import { expenseCat } from "../../constants/schemas";
import {
  MANAGE_EXPENSES,
  LANDING,
  ADD_SERVICE_PROVIDER,
} from "../../constants/routes";
import { Checkbox } from "antd";
import DocSvg from "../../ds/icons/svg/ontario-icon-document.svg";
import DocCan from "../../ds/icons/svg/ontario-icon-delete.svg";

const ExpenseSubSelect = (props) => {
  const history = useHistory();
  const [subCat, setSubCat] = useState("");
  const [hasAgreed, setHasAgreed] = useState(false);
  const store = useStore2();
  return (
    <div className="expense-cat">
      <ProgressBar percent={40} />
      <h1>
        Select expense subcategory for {store.expenseCard.cat.toLowerCase()}
      </h1>

      <>
        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            <div className="ontario-radios">
              {expenseCat[store.expenseCard.cat].sub.map((val) => {
                return (
                  <div className="ontario-radios__item" key={val}>
                    <input
                      className="ontario-radios__input"
                      id={val + "-input"}
                      name="subcat"
                      type="radio"
                      onChange={(subCat) => {
                        subCat = val;
                        store.expenseCard.subCat = subCat;
                      }
                    }
                    />
                    <label
                      className="ontario-label ontario-radios__label"
                      htmlFor={val + "-input"}
                    >
                      {val} <br></br>{" "}
                    </label>
                  </div>
                );
              })}
              <br></br>
              {store.expenseCard.cat ===
                "Evidence-based behavioural services" && (
                <>
                  <p>
                    If you have listed in Section 3, the purchase of
                    evidence-based behavioural services overseen by a clinical
                    supervisor who is not on the Ontario Autism Program Provider
                    List, please attach a copy of their completed and signed
                    Ontario Autism Program Clinical Supervisor Attestation Form
                  </p>
                  <br></br>
                  <Button
                    className="ontario-columns ontario-small-12 myButton"
                    data={{
                      skin: "primary",
                      id: "apply-for-funding",
                      text: "Choose a file from device",
                    }}
                  />
                  <Button
                    className="ontario-columns ontario-small-12 myButton gray-button"
                    data={{
                      skin: "tertiary",
                      id: "apply-for-funding",
                      text: (
                        <p className="ontario-margin-bottom-0-!">
                          <img src={DocSvg} alt="Document Icon" /> document.pdf{" "}
                          <img
                            src={DocCan}
                            style={{ float: "right", marginTop: "4px" }}
                            alt="Delete Button"
                          />
                        </p>
                      ),
                    }}
                    onClickHandler={() => {
                      history.push(ADD_SERVICE_PROVIDER);
                    }}
                  />

                  <table>
                    <tr>
                      <td
                        className={styles.checkbox}
                        style={{ verticalAlign: "top" }}
                      >
                        <Checkbox
                          onChange={(e) => setHasAgreed(e.target.value)}
                          value={hasAgreed}
                        />
                      </td>
                      <td>
                        <p>
                          By checking this box, I confirm that the Ontario
                          Autism Program clinical supervisor who oversaw the
                          evidence-based behavioural service(s) I purchased is
                          not on the Ontario Autism Program Provider List.
                        </p>
                        <p>
                          If I have attached a completed and signed Clinical
                          Supervisor Attestation Form, I further certify that I
                          have reviewed it before submitting it.
                        </p>
                      </td>
                    </tr>
                  </table>
                </>
              )}
              <Button
                className="ontario-columns ontario-small-12 myButton"
                data={{
                  skin: "primary",
                  id: "apply-for-funding",
                  text: "Next Step",
                }}
                onClickHandler={() => {
                  history.push(ADD_SERVICE_PROVIDER);
                }}
              />
            </div>
          </fieldset>
        </div>
      </>
    </div>
  );
};

export default ExpenseSubSelect;