import React from "react";
import { Button } from "../../ds/lib/index";
import { useHistory } from "react-router-dom";
import {
  FIND_EXISTING_INFO,
  WHO_RECEIVES_SERVICES,
} from "../../constants/routes";

import IconAndDesc from "./IconAndDesc";

import { MdEdit, MdInsertDriveFile, MdLock } from "react-icons/md";
import { useGlobalStore } from "../../constants/stores";

const HowToRegisterOAP = (props) => {
  const history = useHistory();

  const setFlow = useGlobalStore((state) => state.setFlow);
  return (
    <>
      <h1 className="ontario-margin-bottom-24-!">What to expect next</h1>

      <div className="ontario-margin-bottom-32-!">
        <h2>1. Get the registered OAP number(s) ready</h2>
        <p>
          You can find this on the invitation to apply for funding. We need this
          number along with date of birth of the individual who the OAP number
          belongs to to confirm that the person with Autism has already been
          registered.
        </p>

        <div
          style={{
            borderLeft: "4px solid #3193cc",
            backgroundColor: "rgba(26, 26, 26, 0.05)",
            padding: "1rem",
          }}
        >
          <div>
            <b>Adding multiple children</b>
          </div>
          You will be given the option to add multiple children during this
          step. Otherwise, you can add more children at a later date through
          your MyOAP dashboard.
        </div>
      </div>

      <div className="ontario-margin-bottom-32-!">
        <h2>2. Create a new Public Secure account for yourself</h2>
        <p>
          If you already have an account for yourself, please sign in. After
          signing in to your Public Secure account and connect your information,
          you will be brought back to the MyOAP.
        </p>
      </div>

      <Button
        data={{ id: "get-started", text: "Get started", skin: "primary" }}
        onClickHandler={() => {
          setFlow(1);
          history.push(WHO_RECEIVES_SERVICES);
        }}
      />
    </>
  );
};

export default HowToRegisterOAP;
