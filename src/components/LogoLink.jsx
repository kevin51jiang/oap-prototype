import React from "react";

import "./LogoLink.scss";
import { Link } from "react-router-dom";

const LogoLink = ({ icon: Icon, title, Title, titleLink, text, className }) => {
  return (
    <div
      className={
        "logo-link ontario-margin-bottom-24-! " + (className ? className : "")
      }
    >
      <div className="title-container ontario-margin-bottom-8-!">
        <span className="icon-container ontario-margin-right-8-!">
          <Icon className="icon" />
        </span>{" "}
        <Link to={titleLink}>{Title ? <Title /> : title}</Link>
      </div>
      <p style={{paddingLeft: "45px"}}>{text}</p>
    </div>
  );
};

export default LogoLink;
