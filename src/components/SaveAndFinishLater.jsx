import React from "react";
import { Button } from "on-ds";
import { LANDING } from "../constants/routes";
import { useHistory } from "react-router-dom";

const SaveAndFinishLater = () => {
  const history = useHistory();
  return (
    <Button
      data={{
        id: "save-and-exit",
        skin: "secondary",
        text: "Save and finish later",
      }}
      onClickHandler={() => {
        history.push(LANDING);
      }}
      className="ontario-small-12 ontario-medium-8"
    />
  );
};

export default SaveAndFinishLater;
