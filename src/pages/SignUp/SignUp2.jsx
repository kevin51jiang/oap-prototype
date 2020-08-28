import React from "react";
import { address, fullname, phoneNumber } from "../../constants/schemas";
import SubmitCancel from "../../components/MultiForm/SubmitCancel";
import Form from "@rjsf/core";
const schema = {
  definitions: {
    address: address.schema,
    fullname: fullname.schema,
    phoneNumber: phoneNumber.schema,
  },
  type: "object",
  properties: {
    Name: { $ref: "#/definitions/fullname", title: "Your name" },
    "Phone number": { $ref: "#/definitions/phoneNumber" },
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
            "Mailing address": { $ref: "#/definitions/address" },
          },
        },
      ],
    },
  },
};

const validate = (formData, errors) => {
  // phone number regex from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
  const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  console.log("trying to verify", formData["Phone number"]["Phone number"]);

  if (!phoneNumberRegex.test(formData["Phone number"]["Phone number"])) {
    errors["Phone number"].addError("Please enter a valid phone number");
  }
  return errors;
};

const transformErrors = (errors) => {
  // errors
  console.log("errors", errors);

  return errors.map((error) => {
    if (error.name === "Please enter a valid phone number") {
      error.message = "Please enter a valid phone number";
    }
    return error;
  });
};

const cleanData = (data) => {
  if (!data["I have a different mailing address"]) {
    data["Mailing address"] = data["Address"];
  }

  // only take out numbers
  data["Phone number"]["Phone number"] = data["Phone number"][
    "Phone number"
  ].match(/\d+/)[0];
  return data;
};

const SignUp2 = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.desc}</h3>
      <Form
        schema={schema}
        transformErrors={transformErrors}
        validate={validate}
        onSubmit={(data) => {
          console.log("submitted", data);
          props.onStepFinish(
            {
              ...cleanData(data.formData),
            },
            props.title
          );
        }}
        formData={props.prevData}
      >
        <SubmitCancel />
      </Form>
    </>
  );
};

export default SignUp2;
