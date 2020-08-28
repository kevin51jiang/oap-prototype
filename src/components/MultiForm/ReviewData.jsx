import React from "react";
import { useHistory } from "react-router-dom";
import { withInfo } from "antd/lib/modal/confirm";

import "./ReviewData.scss";

const ReviewData = (props) => {
  const history = useHistory();

  /**
   * Recursively displays cumulative form data
   * @param {number} page Page that the info was found on
   * @param {string} entryKey "name" of the entry. e.g. in {test: 5}, it would be 'test'
   * @param {*} data "data" in the entry. e.g. in {test: 5}, it would be '5'
   */
  const displayEntry = (page, entryKey, data) => {
    if (typeof data === "object") {
      //can be further decomposed
      return (
        <div key={toString(page) + toString(entryKey) + Math.random()}>
          <b>{entryKey}</b>
          <div className="entries ontario-small-12 ontario-medium-8">
            {Object.keys(data).map((child) => {
              return displayEntry(page, child, data[child]);
            })}
          </div>
        </div>
      );
    } else if (typeof data === "boolean") {
      return (
        <span
          className="entry"
          key={toString(page) + toString(entryKey) + Math.random()}
        >
          <label>{entryKey}: </label> {data ? "✅" : "❌"}
        </span>
      );
    } else {
      return (
        <div
          className="entry"
          key={toString(page) + toString(entryKey) + Math.random()}
        >
          <label>{entryKey}: </label> {data}
        </div>
      );
    }
  };

  return (
    <div className="review-data">
      <h1>Review</h1>
      {props.errors && Object.keys(props.errors).length !== 0 && (
        <>
          <h2>Errors:</h2>
          {JSON.stringify(props.errors, null, 2)}
        </>
      )}
      {Object.keys(props.data).map((page) => {
        return (
          <div key={page}>
            <h3>
              <span>{props.data[page]._title}</span>{" "}
              <button onClick={() => props.onEditRequest(Number(page))}>
                Edit
              </button>
            </h3>
            {Object.keys(props.data[page])
              .filter((entryKey) => entryKey.charAt(0) !== "_")
              .map((entryKey) => {
                // some sort of text that can be stringified
                return displayEntry(page, entryKey, props.data[page][entryKey]);
              })}
          </div>
        );
      })}
      <hr />
      <button
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
      <button onClick={() => props.onSubmit(props.data)}>Submit</button>
    </div>
  );
};

export default ReviewData;
