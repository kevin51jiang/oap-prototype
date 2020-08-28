import React from "react";
import { Checkbox } from "antd";
import { Button } from "on-ds";
import { REGISTRATION_CONSENT } from "../../constants/routes";
import ReviewBox from "../../components/ReviewBox";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { useHistory } from "react-router-dom";
const RegistrationReviewInformation = (props) => {
  const history = useHistory();
  const PrimaryCaregiver = () => (
    <ReviewBox title="Primary caregiver details">
      <div>
        <b>Name:</b> Joe Cheng
      </div>
      <div>
        <b>Date of birth: </b> May 7, 1975
      </div>
      <div>
        <b>House address: </b>{" "}
        <div>
          123 Ottawa Road, <br />
          Ottawa ON, K2J 0K6
        </div>
      </div>
      <div>
        <b>Mailing address: </b>{" "}
        <div>
          123 Ottawa Road, <br />
          Ottawa ON, K2J 0K6
        </div>
      </div>
      <div>
        <b>Email: </b> joecheng@gmail.com
      </div>
      <div>
        <b>Phone: </b> (613) 123-1234
      </div>
      <div>
        <b>Preferred method of communication:</b> Email
      </div>
    </ReviewBox>
  );

  const SecondaryCaregiver = () => (
    <ReviewBox title="Secondary caregiver details">
      <div>
        <b>Name: </b> Helen Cheng
      </div>
      <div>
        <b>Date of birth: </b> May 7, 1975
      </div>
      <div>
        <b>House address: </b>{" "}
        <div>
          123 Ottawa Road, <br />
          Ottawa ON, K2J 0K6
        </div>
      </div>
      <div>
        <b>Email: </b>helencheng@gmail.com
      </div>
      <div>
        <b>Phone: </b>(613) 123-1234
      </div>
    </ReviewBox>
  );

  const ChildDetails = () => (
    <ReviewBox>
      <div>
        <b>Name: </b> Sam Cheng
      </div>
      <div>
        <b>Date of birth: </b>May 6, 2000
      </div>
      <div>
        <b>Attends school: </b>Yes
      </div>
      <div>
        <b>School board: </b>Ottawa District Board
      </div>
      <div>
        <b>School name: </b>School in Ottawa
      </div>
    </ReviewBox>
  );

  const UploadedDocs = () => (
    <ReviewBox>
      <div>
        <b>Diagnosis: </b> diagnosis.pdf 123 KB
      </div>
      <div>
        <b>Proof of date of birth: </b> passport.pdf 235 KB
      </div>
      <div>
        <b>Proof of residency</b> reportcard.pdf 456 KB
      </div>
    </ReviewBox>
  );

  return (
    <>
      <h1>Review information</h1>

      <PrimaryCaregiver />
      <SecondaryCaregiver />
      <ChildDetails />
      <UploadedDocs />

      <table>
        <tr>
          <td style={{ verticalAlign: "top", paddingRight: "1rem" }}>
            <Checkbox className="ontario-margin-bottom-16-!" />
          </td>
          <td>
            <p>
              By checking this box, I certify that the information given on this
              form, and in any attached documents, is to the best of my
              knowledge correct and true.
            </p>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td style={{ verticalAlign: "top", paddingRight: "1rem" }}>
            <Checkbox className="ontario-margin-bottom-16-!" />
          </td>
          <td>
            <p>
              By checking this box, I certify that I will inform the Ministry in
              writing within 30 days if any of the information provided in this
              form changes.
            </p>
          </td>
        </tr>
      </table>

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(REGISTRATION_CONSENT);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default RegistrationReviewInformation;
