import React from "react";

import styles from "./ReviewBox.module.scss";

const ReviewBox = (props) => {
  return (
    <>
      <div className="ontario-row">
        <div className="ontario-columns ontario-small-12 ontario-medium-8">
          <div className={styles.header}>
            <h5 className={styles.title}>{props.title}</h5>
            <span style={{ float: "right" }}>
              <a>edit</a>
            </span>
          </div>
        </div>
      </div>
      <div className="ontario-row">
        <div className="ontario-columns ontario-small-12 ontario-medium-8">
          <div className={styles.reviewBox}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default ReviewBox;
