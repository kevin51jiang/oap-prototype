import React from "react";

const IconAndDesc = ({ icon: Icon, title, text }) => {
  return (
    <div className="icon-and-desc">
      <Icon style={{ fontSize: "2rem" }} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default IconAndDesc;
