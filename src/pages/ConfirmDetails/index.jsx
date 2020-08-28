import React, { useState } from "react";
import DatePicker from "../../components/DatePicker";
import { Input, Button } from "on-ds";
import { useHistory } from "react-router-dom";
import { EMAIL_VERIFICATION } from "../../constants/routes";
import ProgressBar from "../../components/ProgressBar";
import { useStore1 } from "../../constants/stores";

const ConfirmDetails = (props) => {
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState("");

  const history = useHistory();
  const store1 = useStore1();

  const onSubmit = (e) => {
    e.preventDefault();
    store1.oapEmail = email;
    store1.birthday = birthday;

    store1.generateAndSendVerificationCode();
    history.push(EMAIL_VERIFICATION);
  };

  return (
    <div className="confirm-details">
      <ProgressBar percent="20" />
      <h1>Confirm your details with us</h1>

      <p>
        Provide your child’s date of birth and the email you first registered
        with the Ontario Autism Program with to confirm we have the right
        information on file.
      </p>

      <h2>Child's date of birth</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="ontario-row">
          <div className="ontario-columns ontario-small-12 ontario-medium-4">
            <DatePicker onChange={(newBirthday) => setBirthday(newBirthday)} />
          </div>
        </div>
        <label htmlFor="email">Email registered with OAP</label>
        <Input
          data={{ char: "20", id: "email", name: "email", value: email }}
          onChange={(e) => setEmail(e.target.val)}
        />

        <Button
          data={{ text: "Next", id: "next-page", skin: "primary" }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default ConfirmDetails;
