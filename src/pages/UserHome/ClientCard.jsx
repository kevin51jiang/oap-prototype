import React from "react";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";

import "./ClientCard.scss";
const ClientCard = (props) => {
  return (
    <Col span={8}>
      <Card
        className="client-card"
        title="Client"
        extra={
          <Link to={`/manage/${props.clientUid}`}>
            {props.type === "primary" ? "Manage" : "View"}
          </Link>
        }
      >
        <ul>
          <li>
            <label>Notifications: </label>
            {/* <span style={{ color: "#FCAF17" }}>5</span> */}
            <a href="#">{Math.floor(Math.random() * 11) + 1}</a>
          </li>
          <li>
            <label>Applications (in progress): </label>
            <span>{Math.floor(Math.random() * 5)}</span>
          </li>
          <li>
            <label>Renewal date: </label>
            <span>12/15/2020</span>
          </li>
        </ul>
      </Card>
    </Col>
  );
};

export default ClientCard;
