import React from "react";
import { Checkbox } from "antd";
import { useState } from "react";
import { Input, Button, Callout } from "on-ds";

import styles from "./index.module.scss";
import { useHistory } from "react-router-dom";
import { DASHBOARD } from "../../constants/routes";

const FinalizeAndSubmitExpenses = (props) => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [caregiver, setCaregiver] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const history = useHistory();

  return (
    <>
      {hasSubmitted ? (
        <>
          <Callout
            className="ontario-margin-bottom-24-!"
            data={{
              title: (
                <span>Your expenses have successfully been submitted</span>
              ),
              type: "success",
            }}
          />
          <Button
            data={{
              id: "back-to-home",
              skin: "primary",
              text: "Back to home",
            }}
            onClickHandler={() => history.push(DASHBOARD)}
          />
        </>
      ) : (
        <>
          <table>
            <tr>
              <td className={styles.checkbox}>
                <Checkbox
                  onChange={(e) => setHasAgreed(e.target.value)}
                  value={hasAgreed}
                />
              </td>
              <td>
                <p>
                  By checking this box, I certify that the information given on
                  this form (and its attached documentation), is to the best of
                  my knowledge complete, correct and true.
                </p>
                <p>
                  I also certify that all of the information I have submitted
                  for reconciliation is for eligible expenses under the Ontario
                  Autism Program, as required by my Childhood Budget Funding
                  Agreement.
                </p>
                <p>
                  I understand that any of the information and documentation I
                  have provided may be subjected to an audit, and the Ministry
                  may require additional information from me, including original
                  invoices, receipts, and other proofs of payment.
                </p>
                <p>
                  I also understand that any expense information I have provided
                  relating to ineligible or unreconciled expenses will be
                  deducted from future Ontario Autism Program funding for which
                  my child is eligible.
                </p>
                <p>
                  Last, I understand that the Ministry may take other actions,
                  including recovery from me of funds spent on ineligible or
                  unreconciled expenses, as set out in my Childhood Budget
                  Funding Agreement.
                </p>
              </td>
            </tr>
          </table>
          <label htmlFor="caregiver-name">Caregiver name</label>
          <Input
            data={{ char: "20", id: "caregiver-name", value: caregiver }}
            onChange={(e) => setCaregiver(e.target.value)}
          />
          <Button
            data={{
              id: "accept-and-submit",
              skin: "primary",
              text: "Accept and submit",
            }}
            onClickHandler={() => setHasSubmitted(true)}
          />
        </>
      )}
    </>
  );
};

export default FinalizeAndSubmitExpenses;
