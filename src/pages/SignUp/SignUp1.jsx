import React from "react";
import Form from "@rjsf/core";
import SubmitCancel from "../../components/MultiForm/SubmitCancel";

const title = "Terms and conditions";

const schema = {
  type: "object",
  properties: {
    "I accept Terms and Conditions": { type: "boolean", const: true },
  },
  required: ["I accept Terms and Conditions"],
};

const transformErrors = (errors) => {
  // errors
  return errors.map((error) => {
    if (error.name === "required") {
      error.message = "You must accept Terms and Conditions to continue.";
    }
    return error;
  });
};

const SignUp1 = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.desc}</h3>
      <p>
        Mollit elit fugiat aliqua sit minim magna incididunt magna enim fugiat
        cupidatat. Cupidatat proident duis pariatur incididunt officia do nulla
        irure deserunt qui labore qui ea Lorem. Do nulla consectetur laborum
        dolore proident esse nisi consequat nostrud cillum magna mollit in.
        Incididunt officia aliqua aute quis elit Lorem qui ex quis nostrud.
      </p>
      <p>
        Consectetur do ut occaecat ut excepteur et ipsum eu amet. Non eu labore
        consectetur fugiat consectetur tempor magna duis do adipisicing nulla
        consectetur. Deserunt do elit sit culpa eu. Aliqua consectetur labore
        occaecat proident in officia id ullamco voluptate exercitation. Eiusmod
        dolore officia sit ad est aliquip excepteur irure. Sunt amet commodo sit
        anim. Culpa cupidatat anim aliquip consequat dolore eiusmod non.
      </p>
      <p>
        Anim dolore est eu minim aliqua id est quis excepteur laboris non.
        Laborum nulla eu ut officia irure nulla. Ad velit ipsum amet quis aute
        excepteur eiusmod. Nulla labore do esse ipsum elit occaecat est qui ut
        mollit. Duis laboris ex ut cupidatat dolore. Qui sunt laboris
        exercitation nostrud ex minim duis ipsum consequat incididunt aliqua ad.
        Voluptate ex excepteur dolor qui eiusmod.
      </p>
      <p>
        Deserunt consectetur minim ea velit aliqua. Nulla ipsum duis quis veniam
        nisi minim. Pariatur ea velit nulla elit non minim nostrud occaecat
        irure. Quis duis esse esse eiusmod ad in velit exercitation ut
        excepteur. Quis commodo magna exercitation ullamco cillum consequat.
        Culpa velit officia in mollit pariatur consequat labore aliquip.
      </p>
      <p>
        Veniam esse cupidatat cupidatat sunt. Ea velit elit tempor velit amet
        aliqua magna sint id adipisicing enim ad voluptate. Magna nisi est do
        anim sunt do.
      </p>
      <p>
        Commodo voluptate ad anim Lorem aliqua ut enim. Veniam exercitation
        proident Lorem nulla aliqua in ut. Sint ut do est est ut proident
        excepteur. Voluptate aliqua adipisicing dolore aute reprehenderit anim
        non adipisicing non non laboris veniam.
      </p>
      <Form
        schema={schema}
        formData={props.prevData}
        transformErrors={transformErrors}
        showErrorList={false}
        onSubmit={(data) => {
          console.log("submitted", data);
          props.onStepFinish(
            {
              ...data.formData,
            },
            title
          );
        }}
      >
        <SubmitCancel />
      </Form>
    </>
  );
};

export default SignUp1;
