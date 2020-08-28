import React from "react";
import { useHistory } from "react-router-dom";

/**
 * Submit and cancel buttons. That's about it.
 */
const SubmitCancel = () => {
  const history = useHistory();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          const message =
            "Are you sure you would like to cancel and lose all progress?";

          if (window.confirm(message)) {
            history.push("/");
          }
        }}
      >
        Exit
      </button>
      <button type="submit">Next page</button>
    </>
  );
};

export default SubmitCancel;
