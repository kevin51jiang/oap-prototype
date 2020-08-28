import React from "react";
import { useStore3 } from "../../constants/stores";

import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { PS_SIGNIN, PS_HOME } from "../../constants/routes";

const CheckEmail = () => {
  const store = useStore3();

  // const sendEmail = () => {
  //   firebase.auth().sendSignInLinkToEmail(store.email);
  // };
  const history = useHistory();
  return (
    <div className="check-email">
      <div style={{ borderLeft: "8px solid #d3d0c0", background: "#eaf9d6" }}>
        <p style={{ padding: "16px" }}>
          We sent an email to joecheng@gmail.com with a link to confirm your
          email address. You have 30 minutes to click this link. Please check
          all folders including spam and junk.
        </p>
      </div>
      <p>
        Didn't receive an email? <a href="#">Resend</a>
      </p>
      <p>If you're done, please close this window.</p>

      <button onClick={() => history.push(PS_HOME + "?reg=complete")}>
        Demo purposes only, click on link in email
      </button>
    </div>
  );
};

export default CheckEmail;
