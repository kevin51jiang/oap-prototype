import React, { useState } from "react";

import { Steps, Divider } from "antd";
import { useHistory } from "react-router-dom";

import ReviewData from "./ReviewData";

import "antd/dist/antd.css";

const { Step } = Steps;

const MultiForm = (props) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  /**
   * Callback for when a page of the form finishes
   * @param {object} stepData Data aquired from the step
   * @param {string} stepTitle Title of the step (e.g. Terms and Conditions)
   */
  const onStepFinish = (stepData, stepTitle) => {
    setFormData({ ...formData, [step]: { _title: stepTitle, ...stepData } });

    if (step < props.steps.length) {
      setStep(step + 1);
    }
  };

  /**
   * Gets the proper "page" of component for the multi page form
   * @param {Form Component} FormPage The form component you want to display
   * @param {func} onStepFinish Callback once that step "submits"/finishes
   */
  const getComponentAtStep = (FormPage, onStepFinish) => {
    return step < props.steps.length ? (
      <FormPage.Component
        onStepFinish={onStepFinish}
        title={FormPage.title}
        desc={FormPage.desc}
        prevData={formData[step]}
      />
    ) : (
      <ReviewData
        data={formData}
        onEditRequest={onEditRequest}
        onSubmit={props.onSubmit}
        errors={props.errors}
      />
    );
  };

  /**
   * Callback for when user wants to go back to edit info on previous page after already having finished everything
   * @param {int} requstedStep The step (0 indexed) that you are trying to go to in Multipage form
   */
  const onEditRequest = (requstedStep) => {
    setStep(requstedStep);
  };

  return (
    <>
      <h1>{props.title}</h1>
      <Steps current={step}>
        {props.steps.map((step) => (
          <Step title={step.title} description={step.desc} />
        ))}
        <Step title="Review" description="Confirm data before submission" />
      </Steps>
      {getComponentAtStep(props.steps[step], onStepFinish)}
    </>
  );
};

export default MultiForm;
