import React from "react";
import SubmitCancel from "../../components/MultiForm/SubmitCancel";
import Form from "@rjsf/core";

const validate = (formData, errors) => {
  if (formData["Password"] !== formData["Password (confirm)"]) {
    errors["Password"].addError("Passwords don't match");
  }
  return errors;
};

const schema = {
  type: "object",
  properties: {
    Email: { type: "string" },
    Password: { type: "string", minLength: 6 }, //firebase requires minimum 6 char passwords
    "Password (confirm)": { type: "string", minLength: 6 },
  },
};

const uiSchema = {
  Password: {
    "ui:widget": "password",
  },
  "Password (confirm)": {
    "ui:widget": "password",
  },
};

const cleanData = (data) => {
  console.log("uwu data", data);
  return {
    ...data,
    Password: "******",
    "Password (confirm)": "******",
    _password: data.Password,
  };
};

const SignUp3 = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.desc}</h3>
      <Form
        schema={schema}
        uiSchema={uiSchema}
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
        formData={props.prevData} // TO FIX: remove old passwords on edit
      >
        <SubmitCancel />
      </Form>
    </>
  );
};

export default SignUp3;
