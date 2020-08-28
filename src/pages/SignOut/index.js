import React from "react";

import { withFirebase } from "../../components/Firebase";
import { useHistory } from "react-router-dom";

const SignOutButton = ({ firebase, className }) => {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => {
        firebase.doSignOut();
        history.push("/");
      }}
      className={className}
    >
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);
