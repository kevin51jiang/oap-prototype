import React from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { PS_REGCOMPLETE } from "../../constants/routes";

const SecurityQuestions = (props) => {
  const history = useHistory();
  const SecurityQuestion = ({ n }) => {
    return (
      <div
        className="security-question ontario-margin-left-16-!"
        style={{ marginBottom: "2rem", marginRight: "1rem" }}
      >
        <div className="ontario-row">
          <label htmlFor={"q-" + n}>Question {n}</label>
          <select
            name="pets"
            id={"q-" + n}
            className="ontario-columns ontario-small-12 ontario-medium-8 "
          >
            <option value=""></option>
            <option value="dog">
              What was the house number and street name you lived in as a child?
            </option>
            <option value="cat">
              What were the last four digits of your childhood telephone number?
            </option>
            <option value="hamster">What primary school did you attend?</option>
            <option value="parrot">
              In what town or city was your first full time job?
            </option>
            <option value="spider">
              In what town or city did you meet your spouse or partner?
            </option>
            <option value="goldfish">
              What time of the day were you born? (hh:mm)
            </option>
          </select>
        </div>
        <div className="ontario-row">
          <label htmlFor={"a-" + n}>Answer {n}</label>
          <input
            id={"a-" + n}
            className="ontario-columns ontario-small-12 ontario-medium-8"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="security-questions">
      <Link style={{ float: "right", color: "#06c" }} to={PS_REGCOMPLETE}>
        Skip this step
      </Link>
      <h2>Create secret questions (optional)</h2>
      <hr />
      <p>
        Set up a second way to recover your password. Each answer must be unique
        and must not contain words used in the questions. All fields must be
        filled out to save your changes.
      </p>
      <div>
        <span>If you skip this step:</span>
        <ul>
          <li>
            you will still be able to use your email for password recovery
          </li>
          <li>
            you can add secret questions to your account at a later time by
            visiting{" "}
            <a href="https://ontario.ca/publicsecure">
              Ontario.ca/publicsecure
            </a>
          </li>
        </ul>
      </div>

      {/* {Array(3)
        .fill()
        .map((_, ind) => (
        
        ))} */}
      <SecurityQuestion n={1} />
      <SecurityQuestion n={2} />
      <SecurityQuestion n={3} />
      <SecurityQuestion n={4} />
      <SecurityQuestion n={5} />

      <button
        className="btn btn-primary btn-wide"
        onClick={() => history.push("/ps/finish")}
      >
        Continue
      </button>
    </div>
  );
};

export default SecurityQuestions;
