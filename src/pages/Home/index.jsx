import React from "react";

import {
  HOW_TO_REGISTER_WAITLIST,
  PS_HOME,
  HOW_TO_REGISTER_OAP,
} from "../../constants/routes";
import "./index.scss";
import { useHistory, Link } from "react-router-dom";
import { Button, Callout } from "on-ds";
import ExpenseCard from "../../components/ExpenseCard";

import "./index.scss";
import { useGlobalStore } from "../../constants/stores";

const noop = () => {};
/**
 *  data: { id, text, skin },
  onClickHandler,
  disabled,
 */
const App = () => {
  const history = useHistory();
  const setFlow = useGlobalStore((state) => state.setFlow);

  const respondingToCovid = (
    <ul className="callout-content ontario-padding-left-0-! no-list-style">
      <li>
        <Link to="/"> Disruptions due to COVID-19</Link>
      </li>
      <li>
        <b>For child(ren) recently diagnosed: </b>
        <Link to="/">extended deadline</Link> to register and be eligible for
        interim one-time funding
      </li>
      <li>
        <b>For child(ren) receiving a childhood budget: </b>
        <Link to="/">extended amount of time</Link> to spend your funding
      </li>
    </ul>
  );

  return (
    <div className="landing">
      <div className="ontario-hide-for-small-only ">
        <img
          src="/oap-banner.jpg"
          className="header-img ontario-margin-bottom-16-!"
          alt="oap banner"
        />
      </div>

      <h1>Autism in Ontario</h1>

      <p className="ontario-lead-statement" style={{ fontFamily: "Open Sans" }}>
        Get updates about autism and the Ontario Autism Program. Find resources,
        supports, services and programs for families with children and youth on
        the autism spectrum.
      </p>

      <Callout
        data={{
          type: "warning",
          title: "Changes due to COVID-19",
          message: respondingToCovid,
        }}
      />

      <hr />
      <div className="ontario-row">
        <div className="ontario-columns ontario-small-12">
          <h2>MyOAP</h2>
          <p>
            MyOAP is a digital account that allows you to register for the
            Ontario Autism Program, apply for funding and manage your expenses.
          </p>
        </div>
        <div className="ontario-columns ontario-medium-6 ontario-small-12">
          <h3>Recently diagnosed</h3>
          <p>
            <a>Eligible families</a> with a certified Autistic Spectrum Disorder
            diagnosis may register for the Ontario Autism Program to get on the
            waitlist for funding and services.
          </p>

          <Button
            data={{
              id: "register-online",
              text: "Register for the OAP",
              skin: "primary",
            }}
            onClickHandler={() => {
              setFlow(1);
              history.push(HOW_TO_REGISTER_WAITLIST);
            }}
          />
          <p>
            Alternatively, <a>fill out a PDF registration form</a> and mail it
            in.
          </p>
          <hr className="ontario-show-for-small-only" />
        </div>
        <div className="ontario-columns ontario-medium-6 ontario-small-12">
          <h3>Already registered with the Ontario Autism Program</h3>
          <p>
            Registered families or independent youth may use{" "}
            <Link to="/">MyOAP</Link> to check statuses, apply for funding,
            track and submit expenses, view letters and update information.
          </p>

          <div className="ontario-row">
            <span className="ontario-columns ontario-large-8">
              <Button
                data={{
                  id: "setup-account",
                  text: "Sign up for an online account",
                  skin: "primary",
                }}
                onClickHandler={() => {
                  setFlow(3);
                  history.push(HOW_TO_REGISTER_OAP);
                }}
              />
            </span>
            <span className="ontario-columns ontario-large-4">
              <Button
                data={{
                  id: "signin",
                  text: "Sign in",
                  skin: "secondary",
                }}
                // className="ontario-medium-2"
                onClickHandler={() => {
                  setFlow(2);
                  history.push(PS_HOME);
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="more-info ontario-show-for-small-only ">
        <h2>On this page:</h2>
        <ul className="ontario-padding-left-0-! no-list-style">
          <li>
            <a href="#new-to-autism">New to autism</a>
          </li>
          <li>
            <a href="#already-registered">Already registered child(ren)</a>
          </li>
          <li>
            <a href="#program-updates">Program updates</a>
          </li>
          <li>
            <a href="#forPractitioners">For practitioners </a>
          </li>
          <li>
            <a href="#contact-info">Contact information</a>
          </li>
        </ul>
        <hr />
      </div>
      <div id="new-to-autism">
        <h2>New to autism</h2>
        <div className="ontario-row">
          <div className="ontario-columns ontario-medium-6 ontario-small-12">
            <h3>Navigating autism</h3>
            <p>
              <a href="https://www.autismontario.com/">Autism Ontario</a> is the
              province’s leading source of information on autism and plays a key
              role in offering orientation and navigation supports to families
              who are interested in accessing the OAP.
            </p>
            <p>
              Your child with autism may also be eligible for{" "}
              <a>other government programs for children with special needs.</a>
            </p>
            <div>
              <h5>Resources for diagnosis</h5>
              <ul className="no-list-style ontario-padding-left-0-!">
                <li>
                  <a>Signs and symptoms of autism (PDF) </a>
                </li>
                <li>
                  <a>Get an autism assessment</a>
                </li>
                <li>
                  <a>
                    Information kit for families of newly diagnosed children
                    (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ontario-columns ontario-medium-6 ontario-small-12">
            <h3>
              <a>Ontario Autism Program</a>
            </h3>
            <p>
              The Ontario Autism Program offers support to all eligible families
              of children and youth on the autism spectrum. You can purchase the
              services and supports that are most important to you and your
              child.
            </p>
            <div>
              <h5>Eligibility criteria</h5>
              <p>
                Any child who meets all three of the following criteria is
                eligible for Ontario Autism Program:{" "}
              </p>
              <ul>
                <li>is under age 18 </li>
                <li>currently live in Ontario</li>
                <li>
                  has a written diagnosis of autism from a qualified
                  professional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="already-registered">
        <h2>Already registered child(ren)</h2>
        <div className="ontario-row">
          <div className="ontario-columns ontario-medium-4 ontario-small-12">
            <h3>Free support services</h3>
            <ul className="no-list-style ontario-padding-left-0-!">
              <li>
                <a>Foundational family services</a>
              </li>
              <li>
                <a>Supports in schools</a>
              </li>
            </ul>
          </div>
          <div className="ontario-columns ontario-medium-4 ontario-small-12">
            <h3>Funding information</h3>
            <ul className="no-list-style ontario-padding-left-0-!">
              <li>
                <a>Interim one-time funding</a>
              </li>
              <li>
                <a>Childhood budgets</a>
              </li>
              <li>
                <a>Eligible expenses</a>
              </li>
            </ul>
          </div>
          <div className="ontario-columns ontario-medium-4 ontario-small-12">
            <h3>Behaviour plans started before April 1 2019</h3>
            <ul className="no-list-style ontario-padding-left-0-!">
              <li>
                <a>Transition plan</a>
              </li>
              <li>
                <a>Find behaviour services in your area</a>
              </li>
              <li>
                <a>Family service plan</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div id="program-updates">
        <h2>Program updates</h2>
        <div className="ontario-row">
          <div className="ontario-columns ontario-medium-4 ontario-small-12">
            <h1 className="ontario-margin-bottom-0-!">42,167</h1>
            <p>Children registered in the Ontario Autism Program</p>
          </div>
          <div className="ontario-columns ontario-medium-4 ontario-small-12">
            <h1 className="ontario-margin-bottom-0-!">11,345</h1>
            <p>Invitations issued for childhood budgets</p>
          </div>
          <div className="ontario-columns ontario-medium-4 ontario-small-12">
            <h1 className="ontario-margin-bottom-0-!">23,806*</h1>
            <p>Invitations issued for interim one-time funding</p>
          </div>
        </div>
        <p>
          * Updated July 16, 2020: The total number of invitations issued for
          interim one-time funding has been adjusted after the ministry
          determined that 4,497 people were mistakenly counted twice.
        </p>
        <div className="ontario-row">
          <div className="ontario-columns ontario-medium-6 ontario-small-12">
            <h3>
              <a>Disruptions due to COVID-19</a>
            </h3>
            <p>
              To help stop the spread of COVID-19, some services will experience
              disruptions or delays.
            </p>

            <h3>Needs-based program</h3>
            <p>
              The <a>implementation working group</a> is responsible for
              providing input on key design elements for the implementation and
              operationalization of the new Ontario Autism Program. Read more
              about the working group’s <a>mandate</a> and <a>members</a>.
            </p>
            <p>
              The <a>autism advisory panel</a> reviewed the information gathered
              during the public consultations. The panel provided advice on
              developing a new needs-based program with the goal of helping as
              many children as possible.
            </p>
            <p>
              <a>
                Read the recommendations for a New Needs-Based Ontario Autism
                Program Report.
              </a>
            </p>
          </div>
          <div className="ontario-columns ontario-medium-6 ontario-small-12">
            <h3>Announcements</h3>
            <div className="ontario-margin-bottom-16-!">
              <div>August 4, 2020</div>
              <a>
                Ontario Provides More Supports for Families of Children on the
                Autism Spectrum
              </a>
            </div>
            <div className="ontario-margin-bottom-16-!">
              <div>December 17, 2019</div>
              <a>
                Implementation Working Group and Services Align with Ontario
                Autism Program Advisory Panel Recommendations
              </a>
            </div>
            <div className="ontario-margin-bottom-16-!">
              <div>December 17, 2019</div>
              <a>
                Ontario to Implement Needs-Based Autism Program In-Line with
                Advisory Panel's Advice
              </a>
            </div>
            <div className="ontario-margin-bottom-40-!">
              <a>View all announcements related to OAP</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="forPractitioners">
        <h2>
          <a>Information for practitioners</a>
        </h2>
        <p>
          Service providers must continue to use the service delivery tools and
          all associated processes for developing and delivering Ontario Autism
          Program behaviour plans.
        </p>
      </div>
      <hr />

      <div id="contact-info">
        <h2>Contact information</h2>
        <div className="ontario-row">
          <div className="ontario-columns ontario-medium-6 ontario-small-12">
            <h3>Registration, funding and expenses</h3>
            Contact the central intake and registration team to:
            <ul>
              <li>register for the Ontario Autism Program</li>
              <li>ask questions about the waitlist</li>
              <li>
                ask questions about your childhood budget, interim one-time
                funding, funding agreement, or payments to service providers
              </li>
              <li>learn about eligible and ineligible expenses</li>
            </ul>
            <div className="ontario-margin-bottom-24-!">
              <a href="#">1-888-444-4530</a> or <a href="#">oap@ontario.ca</a>
            </div>
            <p>
              Ontario Autism Program
              <br />
              Ministry of Children, Community and Social Services
              <br />
              P.O. Box 193
              <br />
              Toronto, Ontario
              <br />
              M7A 1N3
              <br />
            </p>
          </div>
          <div className="ontario-columns ontario-medium-6 ontario-small-12">
            <h3>General information</h3>
            <p>
              If you have general questions or need more information about the
              Ontario Autism Program, please call ServiceOntario at{" "}
              <a href="#">1-888-284-8340</a>. If we can’t answer your question
              we will connect you with someone who can.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
