import React from "react";
import { Button } from "on-ds";
import { useGlobalStore } from "../../constants/stores";

const SubmitRegistration = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();

  const store = useGlobalStore();

  const SubmissionText = () => (
    <>
      <h1>Submit your registration</h1>
      <p>
        All personal information provided on this form and in attached documents
        is collected by the Ministry for the following purposes:
      </p>
      <ol>
        <li>
          to confirm the eligibility of the child/youth for the Ontario Autism
          Program;
        </li>
        <li>
          to determine the amount of funding the child/youth is eligible to
          receive; and,
        </li>
        <li>
          to assist with the ongoing planning, administration, monitoring and
          evaluation of the Ontario Autism Program.
        </li>
      </ol>
      <p>
        This collection of personal information by the Ministry is authorized
        under s. 38(2) or s. 39(1)(a) of the Freedom of Information and
        Protection of Privacy Act (Ontario).
      </p>
      <p>
        If you have any questions about this collection of personal information
        by the Ministry, please{" "}
        <b>
          contact an Ontario Autism Program Representative at 1-888-444-4530
        </b>{" "}
        or:
      </p>
      <p>
        Ministry of Children, Community and Social Services <br />
        Box 193 Toronto <br />
        ON M7A 1N3
      </p>
      <p>
        Please note that the Ministry is bound by the Freedom of Information and
        Protection of Privacy Act (Ontario) and any information collected may be
        subject to disclosure in accordance with that Act, or by order of a
        court or tribunal.
      </p>
      <Button
        data={{ id: "submit", skin: "primary", text: "Submit" }}
        onClickHandler={() => {
          store.flow = "3b";
          setSubmitted(true);
        }}
      />
    </>
  );

  const SubmissionSuccess = () => (
    <>
      <h1>You've successfully submitted your registration</h1>
      <p>Your Submission ID is</p>
      <p>#### #### ####</p>

      <h2>Next steps</h2>
      <p>
        We'll notify you i f there are any changes to your child's registration
        status, which can also be checked by signing in.
      </p>
      <Button
        data={{ id: "submit", skin: "primary", text: "Submit" }}
        onClickHandler={() => history.push(DASHBOARD)}
      />
    </>
  );
  return <>{!submitted ? <SubmissionText /> : <SubmissionSuccess />}</>;
};

export default SubmitRegistration;
