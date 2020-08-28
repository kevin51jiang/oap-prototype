import React from "react";

import { getFormattedDate } from "../../utils";

import styles from "./Message.module.scss";

import { Link } from "react-router-dom";

const shortDate = { year: "numeric", month: "short", day: "numeric" };

const Message = (props) => {
  return (
    <div
      className={`ontario-row ${styles.message} ${
        props.status === "unread" ? styles.unread : ""
      }`}
    >
      <span className="ontario-margin-left-16-! ontario-margin-top-16-! ontario-margin-right-8-! ontario-flex">
        <h6 className={`${styles.title} ${styles.lineClamp1} `}>
          {props.title}
        </h6>{" "}
        <span className={styles.date}>
          {props.date.toLocaleDateString(undefined, shortDate)}
        </span>
      </span>
      <p
        className={`${styles.lineClamp2} ontario-margin-left-16-! ontario-margin-bottom-8-!`}
      >
        {props.desc}
      </p>
      <a
        href="#"
        className={`${styles.link} ontario-margin-left-16-! ontario-margin-bottom-16-!`}
        onClick={() => props.setOpenMessage(props.id)}
      >
        Read more
      </a>
    </div>
  );
};

export default Message;
