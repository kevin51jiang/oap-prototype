import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { randomString } from "../../utils";

import { withFirebase } from "../../components/Firebase";
import firebaseJank from "firebase";
import * as ROUTES from "../../constants/routes";
import MultiForm from "../../components/MultiForm";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  errors: {},
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * Generates data that the applicant never sees, e.g. 2fa secret
   */
  generateData = () => {
    return {
      _2faSecret: randomString(32, "#"),
      "Children administered": {
        exists: true,
      },
      Banking: {
        exists: true,
      },
    };
  };

  onSubmit = async (data) => {
    // template example of given data
    const owo = {
      "0": {
        _title: "Terms and conditions",
        "I accept Terms and Conditions": true,
      },
      "1": {
        _title: "About you",
        Name: { "First name": "ASD", "Last name": "ASD" },
        Address: {
          Province: "Ontario",
          Country: "Canada",
          "Street Address": "ASD",
          Unit: "ASD",
          City: "ASD",
          "Postal Code": "ASD",
        },
        "Mailing address": {
          Province: "Ontario",
          Country: "Canada",
          "Street Address": "ASD",
          Unit: "ASD",
          City: "ASD",
          "Postal Code": "ASD",
        },
      },
      "2": {
        _title: "MyOntario Account",
        Password: "******",
        "Password (confirm)": "******",
        Email: "asdf@asdf.asdf",
        _password: "asdfasdf",
      },
    };

    const loginDetails = {
      email: data[2].Email,
      pass: data[2]._password,
    };
    // generate predetermined
    const sendData = {
      ...this.generateData(),
      "First name": data[1].Name["First name"],
      "Last name": data[1].Name["Last name"],
      Address: data[1].Address,
      "Mailing address": data[1]["Mailing address"],
    };

    console.log("sendData", sendData);
    (async () => {
      let uid;
      await firebaseJank
        .auth()
        .createUserWithEmailAndPassword(loginDetails.email, loginDetails.pass)
        .then((authUser) => {
          const newUid = authUser.user.uid;
          console.log("authUser", authUser);
          console.log("newUid", newUid);
          return newUid;
        })
        .then(async (newUid) => {
          await firebaseJank
            .firestore()
            .collection("users")
            .doc(uid || firebaseJank.auth().currentUser.uid)
            .set(sendData)
            .then(function (docRef) {
              console.log(
                "Document written with ID: ",
                docRef,
                docRef && docRef.id
              );
            })
            .then(() => {
              this.props.history.push(ROUTES.HOME);
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
              this.setState({ error: error.error });
            });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ error: error.error });
          return;
        });
    })();
  };

  render() {
    return (
      <MultiForm
        steps={[
          {
            title: "Terms and Conditions",
            desc: "Quick byline",
            Component: SignUp1,
          },
          {
            title: "About you",
            desc: "Contact info",
            Component: SignUp2,
          },
          {
            title: "MyOntario Account",
            desc: "Account info",
            Component: SignUp3,
          },
        ]}
        onSubmit={(data) => {
          this.onSubmit(data);
        }}
        errors={this.state.errors}
      />
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
