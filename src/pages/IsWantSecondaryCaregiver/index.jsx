import React, { useState, useEffect } from "react";
import { Radio, RadioGroup, Button } from "on-ds";
import { useStore3 } from "../../constants/stores";
import { useHistory } from "react-router-dom";
import { SECONDARY_CAREGIVER, CHILD_INFORMATION } from "../../constants/routes";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
const IsWantSecondaryCaregiver = () => {
  const [wantsSecondary, setWantsSecondary] = useState(true);
  const store = useStore3();
  const history = useHistory();
  useEffect(() => {
    store.wantsSecondary = wantsSecondary;
  }, [wantsSecondary]);

  return (
    <>
      <h1>Would you like to add a secondary caregiver?</h1>
      <RadioGroup>
        <Radio
          val="Yes"
          name="secondary"
          onChange={() => setWantsSecondary(true)}
          defaultChecked
        />
        <Radio
          val="No"
          name="secondary"
          onChange={() => setWantsSecondary(false)}
        />
      </RadioGroup>

      <p>
        If you choose to provide the personal information of an alternate
        caregiver, they will need to provide their <b>consent</b> at the end of
        this form to the use of their personal information by the ministry.
      </p>

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(
            wantsSecondary ? SECONDARY_CAREGIVER : CHILD_INFORMATION
          );
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default IsWantSecondaryCaregiver;
