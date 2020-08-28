import React from "react";
import Form from "@rjsf/core";
import MultiForm from "../MultiForm";
import { address, fullname } from "../../constants/schemas";
import SubmitCancel from "../MultiForm/SubmitCancel";

const TestForm = (props) => {
  return (
    <>
      <h1>This is a test form wao</h1>
      <MultiForm
        steps={[Comp1, Comp2, Comp3]}
        onSubmit={(data) => {
          alert(JSON.stringify(data));
        }}
      />
    </>
  );
};

const schema = {
  definitions: {
    address: address,
    fullname: fullname,
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

const Comp1 = (props) => {
  return (
    <>
      <Form
        schema={schema}
        onSubmit={(data) => {
          console.log("submitted", data);
          props.onStepFinish(
            {
              ...data.formData,
            },
            "boring step 1"
          );
        }}
      >
        <SubmitCancel />
      </Form>
    </>
  );
};
const Comp2 = (props) => {
  return (
    <button
      onClick={() =>
        props.onStepFinish({ step2: "step2" }, "second step is very wao")
      }
    >
      Next step, step 2
    </button>
  );
};
const Comp3 = (props) => {
  return (
    <button
      onClick={() =>
        props.onStepFinish({ step3: "step3" }, "Very interesting 3rd step")
      }
    >
      Next step, step 3
    </button>
  );
};

export default TestForm;
