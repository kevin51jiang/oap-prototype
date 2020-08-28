import React from "react";

import { Callout, Button } from "on-ds";
const ApplyForFunding = (props) => {
  const applyToIOTFMessage = () => {
    return (
      <div>
        <p>
          Joel was approved for funding on <b>April 3, 2020</b> and the
          application for Interim One-Time Funding is now available.
        </p>
        <Button
          className="ontario-columns ontario-small-12 ontario-margin-bottom-0-! "
          data={{
            skin: "primary",
            id: "apply-for-funding",
            text: "Apply for funding",
          }}
        />
      </div>
    );
  };
  return <Callout data={{ type: "success", message: applyToIOTFMessage() }} />;
};

export default ApplyForFunding;
