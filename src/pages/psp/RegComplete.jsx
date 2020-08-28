import React from "react";

import { useHistory } from "react-router-dom";

import { DASHBOARD, REGISTERING_FOR } from "../../constants/routes";
import { useGlobalStore } from "../../constants/stores";

const RegComplete = (props) => {
  const history = useHistory();
  const store = useGlobalStore();
  return (
    <div className="reg-complete">
      <h2>Account created</h2>
      <hr />
      <p>You have successfully created a new My Ontario login.</p>
      <button
        className="btn btn-primary btn-wide ontario-columns ontario-small-12"
        onClick={() =>
          history.push(store.flow === 3 ? REGISTERING_FOR : DASHBOARD)
        }
      >
        Continue to OAP family Website
      </button>
    </div>
  );
};

export default RegComplete;
