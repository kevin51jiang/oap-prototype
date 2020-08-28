import React from "react";

import { MdAddCircle } from "react-icons/md";
import { Col, Card } from "antd";

import "./NewClient.scss";
import { Link, useHistory } from "react-router-dom";

const NewClient = (props) => {
  const history = useHistory();
  return (
    <Col span={8}>
      {/* Verbiage. View or manage? */}
      <Card title="Add new Client">
        <div className="new-client">
          <button onClick={() => history.push("/manage/new-client")}>
            <MdAddCircle className="big-icon" />
            <div className="desc">Click to start</div>
          </button>
        </div>
      </Card>
    </Col>
  );
};

export default NewClient;
