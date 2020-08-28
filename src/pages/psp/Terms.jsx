import React from "react";

import { useHistory } from "react-router-dom";

const Terms = (props) => {
  const history = useHistory();
  return (
    <div className="terms">
      <h2>Terms of use</h2>
      <hr />

      <div className="terms-content">
        <div className="row">
          <div className="col-md-12 ng-scope" ng-if="locale=='en'">
            <div className="row">
              <div className="col-md-12">
                <p>
                  By using Public Secure, you agree to the following terms of
                  use:
                </p>
                <ul>
                  <li>
                    You understand and accept that you are at all times
                    responsible for protecting your email/username, password and
                    secret questions and answers.
                  </li>
                  <li>
                    If you suspect that others have obtained them, you are
                    responsible for either changing your information or asking
                    that your connected services revoke your access privileges.
                    If you choose the latter, you will have to re-register with
                    your connected services and Public Secure.
                  </li>
                  <li>
                    You understand and accept that the Government of Ontario can
                    revoke your Public Secure access for security or
                    administrative reasons.
                  </li>
                  <li>
                    You understand and accept that a record of your registration
                    will be kept in accordance with the{" "}
                    <a
                      href="https://www.ontario.ca/laws/statute/06a34"
                      target="_blank"
                    >
                      Archives and Record Keeping Act{" "}
                      <span
                        className="fa fa-external-link"
                        label-translate="openNewWindow"
                        aria-label="Opens in new window"
                      ></span>
                    </a>{" "}
                    even if you choose to delete your account. Your account will
                    be removed permanently seven years after you chose to delete
                    it.
                  </li>
                </ul>
                <p>
                  Each government service that uses Public Secure may have
                  service-specific Terms of Use. Please refer to each service’s
                  web page for details.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3>Warranty disclaimer</h3>
                <ul>
                  <li>
                    You understand and accept that the Government of Ontario
                    disclaims all liability (except in cases of gross negligence
                    or wilful misconduct) in relation to the use of, delivery of
                    or reliance upon Public Secure.
                  </li>
                  <li>
                    Use of this website and its contents is at your own risk.
                    This website and all of its content are provided "As Is".
                    You must not rely on any content published on or linked to
                    this website without first making your own enquiries to
                    verify it is accurate, current and complete. We do not make,
                    and expressly disclaim, any representations, warranties,
                    covenants and conditions, express or implied, arising out of
                    operation of law, course of performance, course of dealing,
                    usage of trade or otherwise, including any express or
                    implied warranties and conditions of: merchantability;
                    merchantable quality; fitness for a particular purpose;
                    non-infringement; safety; quality; freedom from defects or
                    that defects will be corrected; uninterrupted, virus-free or
                    error-free use of this website; or accuracy, currency,
                    reliability, completeness or appropriateness relating to the
                    content of this website.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3 id="notice-of-collection">Notice of collection</h3>
                <ul>
                  <li>
                    We are collecting your personal information to create and
                    manage your Public Secure account. This information does not
                    identify you by name; however, it does identify you by the
                    email address that you provide.
                  </li>
                  <li>
                    The information you provide to establish a Public Secure
                    account will be used to enable you to connect to Ontario
                    services you’re authorized to access. If you forget and need
                    to recover your password, a notification will be sent to
                    your email address to assist you. If your account
                    information changes (e.g. change in password), an email will
                    be sent to notify you of this change. Your email address
                    will not be used or disclosed for any other purpose.
                  </li>
                  <li>
                    The Ministry of Government and Consumer Services is
                    authorized to collect your personal information under the
                    authority of section 6(a) and 6(b) of the Ministry of
                    Government Services Act, in accordance with s38(2) of the{" "}
                    <a
                      href="http://www.mgs.gov.on.ca/en/infoaccessandprivacy/index.htm"
                      target="_blank"
                    >
                      Freedom of Information and Protection of Privacy Act{" "}
                      <span
                        className="fa fa-external-link"
                        label-translate="openNewWindow"
                        aria-label="Opens in new window"
                      ></span>
                    </a>
                    , as this information is necessary to properly administer
                    your Public Secure account.
                  </li>
                </ul>
                <br />
                <p>
                  If you have any questions about the collection, use and
                  disclosure of your personal information, you can{" "}
                  <a href="#/contact-us">Contact Us</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>
            <strong id="accept_conditions">
              By clicking “Accept”, I confirm that I have read and agreed to
              Public Secure’s terms and conditions of use and the notice of
              collection.
            </strong>
          </p>
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-primary btn-wide ng-binding"
            onClick={() => history.push("/ps/register")}
          >
            Accept
          </button>
          <div className="button-holder"></div>
        </div>
        <div className="ontario-margin-bottom-32-!" />
      </div>
    </div>
  );
};

export default Terms;
