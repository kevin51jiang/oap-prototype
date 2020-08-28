import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBCcYkQsk80w_0w3hs4FAM_MMNMMAJaqDA",
  authDomain: "ods-autism.firebaseapp.com",
  databaseURL: "https://ods-autism.firebaseio.com",
  projectId: "ods-autism",
  storageBucket: "ods-autism.appspot.com",
  messagingSenderId: "56914553756",
  appId: "1:56914553756:web:a2b28ea0706514492fb659",
  measurementId: "G-56E6V8EMWH",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
  doDeleteAccount = () => this.auth.currentUser.delete();
}

export default Firebase;
