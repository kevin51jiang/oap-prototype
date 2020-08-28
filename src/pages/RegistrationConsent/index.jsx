import React, { useState, useEffect } from "react";

import { Accordion, RadioGroup, Radio, Input, Button } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";

import ChildPrimConsent from "./ChildPrimConsent";
import ChildSecondaryConsent from "./ChildSecondaryConsent";
import ParentPrimConsent from "./ParentPrimConsent";
import ParentSecondaryConsent from "./ParentSecondaryConsent";
import { useStore3 } from "../../constants/stores";

const RegistrationConsent = (props) => {
  const [childCanConsent, setChildCanConsent] = useState(false);
  const [hasSecondaryCaregiver, setHasSecondaryCaregiver] = useState(true);
  const [stage, setStage] = useState("canConsent");

  const store = useStore3();

  // useEffect(() => {
  //   setHasSecondaryCaregiver(store.wantsSecondary ? true : false);
  // }, []);

  const WhatIsConsent = () => (
    <>
      <p>
        An individual will have capacity to consent to the disclosure of their
        personal information where they are able to:
      </p>
      <ul>
        <li>
          Understand the information that is relevant to deciding whether to
          consent, and
        </li>
        <li>
          Appreciate the reasonably foreseeable consequences of giving,
          withholding or withdrawing consent.
        </li>
        <p>
          A child/youth is presumed to have capacity to consent with respect to
          their personal information unless there are reasonable grounds to
          believe the individual is not capable. A parent/guardian may consent
          on the child/youth’s behalf (as a substitute decision-maker), but a
          capable child/youth’s consent or refusal to consent prevails.
        </p>
      </ul>
    </>
  );
  return (
    <>
      {stage === "canConsent" ? (
        <>
          <h1>Is your child able to provide informed consent?</h1>
          <div className="ontario-margin-bottom-16-!">
            <Accordion
              data={{
                id: "informed-consent-accordion",
                title: "What is informed consent?",
                content: <WhatIsConsent />,
              }}
            />
          </div>

          <RadioGroup>
            <Radio
              name="can-consent"
              val="Yes"
              onChange={() => setChildCanConsent(true)}
            />
            <Radio
              name="can-consent"
              val="No"
              onChange={() => setChildCanConsent(false)}
            />
          </RadioGroup>

          <Button
            data={{ id: "next", skin: "primary", text: "Next step" }}
            onClickHandler={() => {
              setStage("getConsent");
            }}
            className=" ontario-small-12 ontario-medium-8"
          />
          <SaveAndFinishLater />
        </>
      ) : (
        <>
          {childCanConsent && !hasSecondaryCaregiver ? (
            <ChildPrimConsent />
          ) : childCanConsent && hasSecondaryCaregiver ? (
            <ChildSecondaryConsent />
          ) : !childCanConsent && !hasSecondaryCaregiver ? (
            <ParentPrimConsent />
          ) : (
            <ParentSecondaryConsent />
          )}
        </>
      )}
    </>
  );
};

export default RegistrationConsent;
