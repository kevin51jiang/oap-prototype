import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import ThemedRoute from "../../components/ThemedRoute";
import * as ROUTES from "../../constants/routes";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import ChildHasSchool from "../ChildHasSchool";
import ChildInformation from "../ChildInformation";
import ChildSchoolDetails from "../ChildSchoolDetails.jsx";
import ConfirmDetails from "../ConfirmDetails";
import ConnectInfoToPS from "../ConnectInfoToPS";
import Dashboard from "../Dashboard";
import ExpenseLanding from "../Expenses";
import ExpenseSelect from "../Expenses/expense-cat";
import ExpenseDetails from "../Expenses/expense-details";
import ExpenseManaged from "../Expenses/expense-manage";
import ExpenseProvider from "../Expenses/expense-provider";
import ExpenseProviderAlt from "../Expenses/expense-provider-alt";
import ExpenseReview from "../Expenses/expense-review";
import ExpenseSubSelect from "../Expenses/expense-subcat";
import ExpenseSubmit from "../Expenses/expense-submit";
import PersonalReview from "../Expenses/personal-review";
import FinalizeAndSubmitExpenses from "../FinalizeAndSubmitExpenses";
import FindExistingInfo from "../FindExistingInfo";
// import Navigation from "../Navigation";
import LandingPage from "../Home";
import HowToRegisterOAP from "../HowToRegisterOAP";
import HowToRegisterWaitlist from "../HowToRegisterWaitlist";
import IsWantSecondaryCaregiver from "../IsWantSecondaryCaregiver";
import PasswordForgetPage from "../PasswordForget";
import PrimaryCaregiver from "../PrimaryCaregiver";
import PrimaryCaregiverContactInfo from "../PrimaryCaregiverContactInfo";
import PrimaryCaregiverDetails from "../PrimaryCaregiverDetails";
import RegisterFor from "../RegisterFor";
import ReviewExpenses from "../ReviewExpenses";
import ReviewExpenseSingular from "../ReviewExpenses/ReviewExpenseSingular";
import ReviewExpenseSubcat from "../ReviewExpenses/ReviewExpenseSubcat";
import ReviewPersonalDetails from "../ReviewPersonalDetails";
import SecondaryCaregiver from "../SecondaryCaregiver";
import SecondaryCaregiverContact from "../SecondaryCaregiverContact";
import { withAuthentication } from "../Session";
import SignInEmailPass from "../SignInEmailPass";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUp";
import HomePage from "../UserHome";
import VerifyEmail from "../VerifyEmail";
import ViewMessages from "../ViewMessages";
import PSRoutes from "./PSRoutes";
import RegistrationUploadDocs from "../RegistrationUploadDocs";
import RegistrationReviewInformation from "../RegistrationReviewInformation";
import RegistrationConsent from "../RegistrationConsent";
import SecondaryCaregiverAddress from "../SecondaryCaregiverAddress";
import RegistrationSubmit from "../RegistrationSubmit";
import UploadDocuments from "../Upload/upload-doc";
import WhoReceivesServices from "../WhoReceivesServices";
import { Upload } from "antd";

const App = () => (
  <Router>
    {/* Scroll to top */}
    <ScrollToTop />
    {/* PUBLIC SECURE WOOOOOOOOOO */}
    <PSRoutes />
    <ThemedRoute
      exact
      path={ROUTES.LANDING}
      ontarioRoute={true}
      render={() => <LandingPage />}
    />
    <ThemedRoute path={ROUTES.SIGN_UP} render={() => <SignUpPage />} />
    <ThemedRoute exact path={ROUTES.SIGN_IN} render={() => <SignInPage />} />

    <ThemedRoute
      exact
      path={ROUTES.SIGN_IN_AUTH_APP}
      render={() => <LandingPage />}
    />
    <ThemedRoute
      exact
      path={ROUTES.SIGN_IN_EMAIL_PASS}
      render={() => <SignInEmailPass />}
    />
    <ThemedRoute
      exact
      path={ROUTES.SIGN_IN_EMAIL_LINK}
      render={() => <LandingPage />}
    />
    <ThemedRoute
      path={ROUTES.PASSWORD_FORGET}
      render={() => <PasswordForgetPage />}
    />
    <ThemedRoute path={ROUTES.HOME} render={() => <HomePage />} />
    <ThemedRoute path={ROUTES.ACCOUNT} render={() => <AccountPage />} />
    <ThemedRoute path={ROUTES.ADMIN} render={() => <AdminPage />} />
    <ThemedRoute path={ROUTES.DASHBOARD} render={() => <Dashboard />} />
    {/* First flow */}
    <ThemedRoute
      path={ROUTES.HOW_TO_REGISTER_OAP}
      render={() => <HowToRegisterOAP />}
    />

    <ThemedRoute
      path={ROUTES.WHO_RECEIVES_SERVICES}
      render={() => <WhoReceivesServices />}
    />

    <ThemedRoute
      path={ROUTES.FIND_EXISTING_INFO}
      render={() => <FindExistingInfo />}
    />
    <ThemedRoute
      path={ROUTES.CONFIRM_DETAILS}
      render={() => <ConfirmDetails />}
    />
    <ThemedRoute
      path={ROUTES.EMAIL_VERIFICATION}
      render={() => <VerifyEmail />}
    />

    <ThemedRoute
      path={[ROUTES.VIEW_MESSAGES + "/:messageId", ROUTES.VIEW_MESSAGES]}
      render={() => <ViewMessages />}
    />

    {/* Second Flow */}
    <ThemedRoute
      path={ROUTES.MANAGE_EXPENSES}
      render={() => <ExpenseLanding />}
    />
    <ThemedRoute
      path={ROUTES.EXPENSE_CATEGORY}
      render={() => <ExpenseSelect />}
    />
    <ThemedRoute
      path={ROUTES.EXPENSE_SUB_CATEGORY}
      render={() => <ExpenseSubSelect />}
    />
    <ThemedRoute
      path={ROUTES.ADD_SERVICE_PROVIDER}
      render={() => <ExpenseProvider />}
    />

    <ThemedRoute
      path={ROUTES.ADD_SERVICE_PROVIDER_ALT}
      render={() => <ExpenseProviderAlt />}
    />

    <ThemedRoute
      path={ROUTES.EXPENSE_DETAILS}
      render={() => <ExpenseDetails />}
    />

    <ThemedRoute
      path={ROUTES.REVIEW_EXPENSE}
      render={() => <ExpenseReview />}
    />
    <ThemedRoute path={ROUTES.EXPENSE_ADDED} render={() => <ExpenseSubmit />} />

    <ThemedRoute
      path={ROUTES.PERSONAL_EXPENSE_REVIEW}
      render={() => <PersonalReview />}
    />

    <ThemedRoute
      path={ROUTES.CONNECT_INFO_TO_PS_ACCOUNT}
      render={() => <ConnectInfoToPS />}
    />

    <ThemedRoute
      path={ROUTES.MANAGE_EXPENSES_ALT}
      render={() => <ExpenseManaged />}
    />

    <ThemedRoute
      exact
      path={ROUTES.REVIEW_PERSONAL_DETAILS}
      render={() => <ReviewPersonalDetails />}
    />

    <ThemedRoute
      exact
      path={ROUTES.REVIEW_EXPENSES_FINAL}
      render={() => <ReviewExpenses />}
    />

    <ThemedRoute
      exact
      path={ROUTES.REVIEW_EXPENSE_SUBCAT}
      render={() => <ReviewExpenseSubcat />}
    />

    <ThemedRoute
      exact
      path={ROUTES.REVIEW_EXPENSE_SINGULAR}
      render={() => <ReviewExpenseSingular />}
    />

    <ThemedRoute
      path={ROUTES.FINALIZE_AND_SUBMIT_EXPENSES}
      render={() => <FinalizeAndSubmitExpenses />}
    />

    {/* Third flow */}

    <ThemedRoute
      path={ROUTES.HOW_TO_REGISTER_WAITLIST}
      render={() => <HowToRegisterWaitlist />}
    />

    <ThemedRoute path={ROUTES.REGISTERING_FOR} render={() => <RegisterFor />} />

    <ThemedRoute
      path={ROUTES.PRIMARY_CAREGIVER}
      render={() => <PrimaryCaregiver />}
    />
    <ThemedRoute
      path={ROUTES.PRIMARY_CAREGIVER_DETAILS}
      render={() => <PrimaryCaregiverDetails />}
    />
    <ThemedRoute
      path={ROUTES.PRIMARY_CAREGIVER_CONTACTS}
      render={() => <PrimaryCaregiverContactInfo />}
    />
    <ThemedRoute
      path={ROUTES.IS_WANT_SECONDARY_CAREGIVER}
      render={() => <IsWantSecondaryCaregiver />}
    />

    <ThemedRoute
      path={ROUTES.SECONDARY_CAREGIVER}
      render={() => <SecondaryCaregiver />}
    />
    <ThemedRoute
      path={ROUTES.SECONDARY_CAREGIVER_ADDRESS}
      render={() => <SecondaryCaregiverAddress />}
    />
    <ThemedRoute
      path={ROUTES.SECONDARY_CAREGIVER_CONTACT}
      render={() => <SecondaryCaregiverContact />}
    />

    <ThemedRoute
      path={ROUTES.CHILD_INFORMATION}
      render={() => <ChildInformation />}
    />
    <ThemedRoute
      path={ROUTES.CHILD_HAS_SCHOOL}
      render={() => <ChildHasSchool />}
    />
    <ThemedRoute
      path={ROUTES.CHILD_SCHOOL_DETAILS}
      render={() => <ChildSchoolDetails />}
    />

    <ThemedRoute
      path={ROUTES.REGISTRATION_UPLOAD_DOCS}
      render={() => <RegistrationUploadDocs />}
    />
    <ThemedRoute
      path={ROUTES.REGISTRATION_REVIEW_INFO}
      render={() => <RegistrationReviewInformation />}
    />
    <ThemedRoute
      path={ROUTES.REGISTRATION_CONSENT}
      render={() => <RegistrationConsent />}
    />
    <ThemedRoute
      path={ROUTES.REGISTRATION_SUBMIT}
      render={() => <RegistrationSubmit />}
    />

    <ThemedRoute
      path={ROUTES.UPLOAD_DOCUMENTS}
      render={() => <UploadDocuments />}
    />
    {/* <Route exact  render={() => <h1>Error 404, no page found </h1>} /> */}
  </Router>
);

export default withAuthentication(App);
