import React from "react";
import { getFormattedDate } from "../../utils";

import { useHistory } from "react-router-dom";

import firebase from "firebase";
const shortDate = { year: "numeric", month: "short", day: "numeric" };
const MessageExtended = (props) => {
  const history = useHistory();
  return (
    <>
      <span>
        <a onClick={props.back}>{"< Back"}</a>
      </span>
      <div
        style={{ color: "#666" }}
        className="ontario-margin-bottom-16-! ontario-margin-top-24-!"
      >
        {props.date.toLocaleString("en-US", {
          ...shortDate,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </div>
      <h2>{props.title}</h2>
      {props.content}
    </>
  );
};

export default MessageExtended;
