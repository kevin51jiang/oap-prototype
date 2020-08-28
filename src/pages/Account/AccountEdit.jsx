import React, { useContext } from "react";
import { address, fullname } from "../../constants/schemas";
import Form from "@rjsf/core";
import {
  useCollection,
  useDocumentData,
  useDocument,
} from "react-firebase-hooks/firestore";
// import Firebase from "../Firebase/firebase";
import firebase from "firebase";

const schema = {
  definitions: {
    address: address.schema,
    fullname: fullname.schema,
  },
  type: "object",
  properties: {
    Name: { $ref: "#/definitions/fullname", title: "Your name" },
    Address: { $ref: "#/definitions/address" },
    "I have a different mailing address": {
      type: "boolean",
      enum: [true, false],
    },
  },
  dependencies: {
    "I have a different mailing address": {
      oneOf: [
        {
          properties: {
            "I have a different mailing address": {
              enum: [true],
            },
            "Mailing Address": { $ref: "#/definitions/address" },
          },
        },
      ],
    },
  },
};
const AccountEdit = (props) => {
  // const [value, loading, error] = useCollection(
  //   firebase.firestore().collection("hooks"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  // const [value, loading, error] = useDocumentData(
  //   Firebase.db.collection("users").doc(Firebase.auth.currentUser)
  // );

  const [value, loading, error] = useCollection(
    firebase.firestore().collection("users"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <>
      <h2>Edit account info</h2>
      <Form schema={schema} />
      <div>
        <p>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {/* {value && firebase.auth().currentUser.uid && (
            <span>
              Collection:{" "}
              {value.docs.map((doc) => (
                <React.Fragment key={doc.id}>
                  {JSON.stringify(doc.data())},{" "}
                </React.Fragment>
              ))}
            </span>
          )} */}
        </p>
      </div>
    </>
  );
};

export default AccountEdit;
