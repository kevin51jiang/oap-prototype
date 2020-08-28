import React from "react";

import { withAuthorization } from "../Session";

import "./index.scss";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import NewClient from "./NewClient";
import { useDocumentData } from "react-firebase-hooks/firestore";
import ClientCard from "./ClientCard";

// const [value, loading, error] = useCollection(
//   firebase.firestore().collection("hooks"),
//   {
//     snapshotListenOptions: { includeMetadataChanges: true },
//   }
// );

const UserHome = (props) => {
  return (
    <div className="user-home">
      <div className="ontario-row">
        <h2>Dashboard</h2>
      </div>
      <div className="quick-manage ontario-row">
        <h2>Overview</h2>
        {/* Different cards for creating a client */}
        <Row gutter={16}>
          <ClientCard clientUid={"client-1"} type="primary" />
          <ClientCard clientUid={"client-2"} />
          <NewClient />
        </Row>
      </div>
      <div className="ontario-row ontario-padding-top-16-!">
        <span className="ontario-column ontario-small-12">
          <Link to="/account"> Change your account info</Link>
        </span>
      </div>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(UserHome);
