import React, { useState, useEffect } from "react";

import "./Home.scss";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  const [completedReg, setCompletedReg] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("reg=complete")) {
      setCompletedReg(true);
    }
  }, []);

  return (
    <div className="home">
      <div className="col-md-12">
        <h2 className="subtitle ng-binding">Sign in options</h2>
        <hr className="thick" />
        {/* <div className="col-md-12 ng-hide" ng-show="hasBanner">
          <div role="alert" className="alert alert-warning">
            <div ng-show="locale=='en'" className="ng-binding"></div>
          </div>
        </div>
        <div className="col-md-12 ng-hide" ng-show="hasSuccess">
          <div role="alert" className="alert alert-success ng-binding"></div>
        </div> */}
        {completedReg && (
          <div
            style={{
              display: "inline-block",
              borderLeft: "8px solid #d3e0c0",
              backgroundColor: "#eaf9d6",
              padding: "1rem",
              margin: "1rem auto",
            }}
          >
            You have successfully confirmed your email. Please sign in again to
            continue.{" "}
          </div>
        )}

        <div className="col-md-12">
          <p className="ng-binding">
            Public Secure allows you to sign in safely and securely to{" "}
            <a
              href="https://www.ontario.ca/page/ontario-autism-program"
              className="ng-scope"
            >
              <span className="app-name ng-binding">OAP</span>
            </a>
            .
          </p>
          <h2 className="subtitle ng-binding">Choose a sign in option:</h2>
          <hr className="thick margin-top-10 margin-bottom-16" />
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="button-holder">
                  <button
                    onClick={() =>
                      history.push(process.env.PUBLIC_URL + "/ps/signin")
                    }
                    className="login-btn on-login ontario-small-12 ontario-medium-8 ontario-large-4"
                  >
                    <img src="/ps/on-icon.png" style={{ float: "left" }} />
                    <span className="ng-binding">My Ontario login</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <p className="ng-binding">
              Sign in with an email and password that is only for government
              services.
            </p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 margin-top-15">
                <div className="button-holder">
                  <button
                    // onClick={() =>
                    //   window.open(
                    //   "https://login.publicsecure.gov.on.ca/securekey.html"
                    //   )
                    // }
                    className="login-btn sec-login ontario-small-12 ontario-medium-8 ontario-large-4"
                  >
                    <img src="/ps/securekey.png" style={{ float: "left" }} />
                    <span className="ng-binding">Securekey Concierge</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <p className="margin-bottom-0 ng-binding">
              Sign in using the same username and password that you use for
              other online services (e.g. your bank)
            </p>
            <ul>
              <li className="ng-binding">
                No passwords or personal information are shared with the
                government, SecureKey or your sign in partner. The government
                and SecureKey won't see any of your banking information.
              </li>
              <li className="ng-binding">
                Your sign in partner and SecureKey won't know which government
                service you're accessing and the government won't know which
                sign in partner you're using.
              </li>
              <li>
                <a
                  ng-show="locale=='en'"
                  href="https://securekeyconcierge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ng-binding"
                >
                  Learn more about SecureKey{" "}
                  <span
                    className="fa fa-external-link"
                    label-translate="openNewWindow"
                    aria-label="Opens in new window"
                  ></span>
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-12" />
          <p>
            <b className="ng-binding">Supported sign in partners:</b>
          </p>
          <div className="col-md-8" />
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/affinity.svg" alt="Affinity" />
          </div>
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/ATB.svg" alt="ATB" />
          </div>
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/bmo.svg" alt="BMO" />
          </div>
          <div className="bank-icon-div">
            <img
              className="bank-icon"
              src="/ps/caisses-populaires.svg"
              alt="Caisses Populaires"
            />
          </div>

          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/cibc.svg" alt="CIBC" />
          </div>
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/connexus.svg" alt="Connexus" />
          </div>
          <div className="bank-icon-div">
            <img
              className="bank-icon"
              src="/ps/desjardins.svg"
              alt="Desjardins"
            />
          </div>
          <div className="bank-icon-div">
            <img
              className="bank-icon"
              src="/ps/national-bank.svg"
              alt="National Bank"
            />
          </div>
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/rbc.svg" alt="RBC" />
          </div>
          <div className="bank-icon-div">
            <img
              className="bank-icon"
              src="/ps/scotiabank.svg"
              alt="Scotia Bank"
            />
          </div>
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/servus.svg" alt="Servus" />
          </div>
          <div className="bank-icon-div">
            <img
              className="bank-icon"
              src="/ps/tangerine.svg"
              alt="Tangerine"
            />
          </div>

          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/td.svg" alt="TD" />
          </div>
          <div className="bank-icon-div">
            <img
              className="bank-icon"
              src="/ps/uni-financial.svg"
              alt="Uni Financial"
            />
          </div>
          <div className="bank-icon-div">
            <img className="bank-icon" src="/ps/vancity.svg" alt="Vancity" />
          </div>

          <div style={{ marginBottom: "50px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
