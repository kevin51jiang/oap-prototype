import React from "react";
import { Callout } from "on-ds";

const IOTFDeposited = (props) => {
  return (
    <Callout
      data={{
        type: "success",
        message: (
          <p>
            Joel's Interim One-Time Funding was deposited on{" "}
            <b>April 21, 2020</b>
          </p>
        ),
      }}
    />
  );
};

export default IOTFDeposited;
