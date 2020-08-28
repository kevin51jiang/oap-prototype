import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../../pages/SignOut";

import { AuthUserContext } from "../../pages/Session";

import * as ROUTES from "../../constants/routes";
import "../Navigation/nav.scss";
import { useGlobalStore } from "../../constants/stores";

// import "./Navigation.scss";

const Navigation = () => {
  const global = useGlobalStore();

  return (
    <>
      <div className="ontario-background--fuchsia primary-menu!" id="navbar">
        <div className="ontario-grid-container">
          <div className="ontario-row">
            <div className="ontario-small-12 ontario-columns">
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns ontario-navigation ontario-flex ontario-flex--justify-content">
                  <div
                    className="visually-hidden"
                    id="block-mainnavigation-menu"
                  >
                    Main navigation
                  </div>
                  <div className="ontario-navigation__title ontario-h4 ontario-margin-bottom-0-!">
                    <a href="/" title="Home">
                      <span className="ontario-nbsp oap-navopts">
                        <span className="uppercase oap-navbar-home">MyOAP</span>
                      </span>
                    </a>
                  </div>
                  <nav role="navigation">
                    <ul className="ontario-list--inline ontario-navigation__list ontario-show-for-medium-only ontario-flex">
                      <AuthUserContext.Consumer>
                        {(authUser) =>
                          authUser ? (
                            <NavigationAuth global={global} />
                          ) : (
                            <NavigationNonAuth global={global} />
                          )
                        }
                      </AuthUserContext.Consumer>
                      <AuthUserContext.Consumer>
                        {(authUser) =>
                          authUser ? (
                            <NavigationAuthMobile global={global} />
                          ) : (
                            <NavigationNonAuthMobile global={global} />
                          )
                        }
                      </AuthUserContext.Consumer>
                    </ul>
                    <button
                      className="ontario-mobile-menu__button ontario-navigation__menu"
                      data-toggle="ontario-mobile-menu--off-canvas"
                      aria-controls="ontario-mobile-menu--off-canvas"
                      aria-expanded="false"
                    >
                      <span>Menu</span>
                    </button>
                    <span
                      className="mobileMenu ontario-show-for-small-only ontario-margin-top-8-! ontario-margin-bottom-8-!"
                      onClick={() =>
                        (document.getElementById("mySidenav").style.width =
                          "250px")
                      }
                      alt="Menu"
                    >
                      &#9776;
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

const NavigationAuth = (props) => (
  <>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <Link to={ROUTES.HOME}>Dashboard</Link>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <button onClick={() => props.global.setFlow((props.global.flow % 3) + 1)}>
        Advance DB
      </button>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <button onClick={() => props.global.setFlow(1)}>Reset DB</button>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <SignOutButton />
    </li>
  </>
);

const NavigationNonAuth = (props) => (
  <>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <Link to={ROUTES.SIGN_IN}>Sign{"\u00a0"}In</Link>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <Link to={ROUTES.SIGN_UP}>Sign{"\u00a0"}Up</Link>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <button onClick={() => props.global.setFlow(2)}>Advance DB</button>
    </li>
    <li className="ontario-navigation__list--item ontario-hide-for-small-only">
      <button onClick={() => props.global.setFlow(1)}>Reset DB</button>
    </li>
  </>
);

const NavigationAuthMobile = (props) => (
  <div id="mySidenav" class="sidenav ontario-show-for-small-only">
    <a
      href="javascript:void(0)"
      class="closebtn"
      onClick={() => (document.getElementById("mySidenav").style.width = "0")}
    >
      &times;
    </a>
    <Link
      to={ROUTES.LANDING}
      className="ontario-hide-for-medium-only sidebarText"
    >
      Landing
    </Link>
    <Link
      to={ROUTES.DASHBOARD}
      className="ontario-hide-for-medium-only sidebarText"
    >
      Dashboard
    </Link>
    <Link
      to={ROUTES.ACCOUNT}
      className="ontario-hide-for-medium-only sidebarText"
    >
      Account
    </Link>
    <SignOutButton className="ontario-hide-for-medium-only navbar-btn-black" />

    <button
      className="navbar-btn-black"
      onClick={() => props.global.setFlow(2)}
    >
      Advance DB
    </button>
    <button
      className="navbar-btn-black"
      onClick={() => props.global.setFlow(1)}
    >
      Reset DB
    </button>
  </div>
);

const NavigationNonAuthMobile = (props) => (
  <div id="mySidenav" class="sidenav ontario-show-for-small-only">
    <a
      href="javascript:void(0)"
      class="closebtn"
      onClick={() => (document.getElementById("mySidenav").style.width = "0")}
    >
      &times;
    </a>
    <Link
      to={ROUTES.LANDING}
      className="ontario-hide-for-medium-only sidebarText"
    >
      Landing
    </Link>
    <Link
      to={ROUTES.DASHBOARD}
      className="ontario-hide-for-medium-only sidebarText"
    >
      Dashboard
    </Link>
    <Link
      to={ROUTES.LANDING}
      className="ontario-hide-for-medium-only sidebarText"
    >
      Scenario 2
    </Link>
    <button
      className="navbar-btn-black"
      onClick={() => props.global.setFlow(2)}
    >
      Advance DB
    </button>
    <button
      className="navbar-btn-black"
      onClick={() => props.global.setFlow(1)}
    >
      Reset DB
    </button>
  </div>
);

export default Navigation;
