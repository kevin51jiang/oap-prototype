import React from "react";
import { RadioGroup, Radio, Button } from "on-ds";
import { useHistory } from "react-router-dom";
import { FIND_EXISTING_INFO } from "../../constants/routes";

const WhoReceivesServices = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>Who receives services?</h1>
      <RadioGroup>
        <Radio name="service-receive" val="Yourself" />
        <Radio name="service-receive" val="A child" defaultChecked />
      </RadioGroup>

      <Button
        data={{ id: "get-started", text: "Next step", skin: "primary" }}
        onClickHandler={() => {
          history.push(FIND_EXISTING_INFO);
        }}
      />
    </>
  );
};

export default WhoReceivesServices;
