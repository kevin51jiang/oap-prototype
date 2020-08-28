import React from "react";

import { Line } from "rc-progress";

const ProgressBar = ({ percent }) => {
  return <Line percent={percent} strokeWidth="1" strokeColor="#E65A5A" />;
};

export default ProgressBar;
