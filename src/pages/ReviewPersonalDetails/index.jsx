import React from "react";
import ReviewBox from "../../components/ReviewBox";
import { REVIEW_EXPENSES_FINAL } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import { Button } from "on-ds";

const ReviewPersonalDetails = (props) => {
  const history = useHistory();
  const PrimaryDetails = () => (
    <ReviewBox title="Primary caregiver details">
      <div>
        <b>Name:</b> Aidan Cotton
      </div>
      <div>
        <b>Date of birth:</b> May 7, 1975
      </div>
      <div>
        <span>
          <b>House address:</b>
        </span>
        <div className="ontario-padding-top-0-!">
          123 Ottawa Road, <br />
          Ottawa ON, K2J 0K6
        </div>
      </div>
      <div>
        <b>Email:</b> aidan.cotton@gmail.com
      </div>
      <div>
        <b>Phone:</b> (613) 123-1234
      </div>
      <div>
        <b>Preferred method of communication:</b> Email
      </div>
    </ReviewBox>
  );

  const SecondaryDetails = () => (
    <ReviewBox title="Secondary caregiver details">
      <div>
        <b>Name: </b> Kate Cotton
      </div>
      <div>
        <b>Date of birth: </b> May 7, 1975
      </div>
      <div>
        <span>
          <b>House address:</b>
        </span>
        <div className="ontario-padding-top-0-!">
          123 Ottawa Road, <br />
          Ottawa ON, K2J 0K6
        </div>
      </div>
      <div>
        <b>Email:</b> aidan.cotton@gmail.com
      </div>
      <div>
        <b>Phone:</b> (613) 123-1234
      </div>
    </ReviewBox>
  );

  const ChildDetails = () => (
    <ReviewBox title="Secondary caregiver details">
      <div>
        <b>Name: </b> Child Cotton
      </div>
      <div>
        <b>Date of birth: </b> May 6, 2000
      </div>
      <div>
        <b>Attends school:</b> Yes
      </div>
      <div>
        <b>School board: </b> Ottawa District Board
      </div>
      <div>
        <b>School name:</b> School in Ottawa
      </div>
    </ReviewBox>
  );

  return (
    <div className="review-personal-details">
      <h1>Review personal details</h1>
      <p>
        Review the personal details of you and your child carefully. Changes
        made to these details through this website after <b>April 23, 2021</b>{" "}
        will not be reflected in your submission.
      </p>

      <PrimaryDetails />
      <SecondaryDetails />
      <ChildDetails />

      <Button
        data={{ id: "next", skin: "primary", text: "Next" }}
        onClickHandler={() => {
          history.push(REVIEW_EXPENSES_FINAL);
        }}
      />
    </div>
  );
};

export default ReviewPersonalDetails;
