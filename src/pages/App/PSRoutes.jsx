import React from "react";

import * as ROUTES from "../../constants/routes";

//public sec
import PS from "../psp/index";
import PSRoute from "../../components/PSRoute";

const PSRoutes = () => {
  return (
    <>
      <PSRoute exact path={ROUTES.PS_LANDING} render={() => <PS.Landing />} />
      <PSRoute exact path={ROUTES.PS_HOME} render={() => <PS.Home />} />
      <PSRoute exact path={ROUTES.PS_SIGNIN} render={() => <PS.Signin />} />
      <PSRoute exact path={ROUTES.PS_REGISTER} render={() => <PS.Register />} />
      <PSRoute
        exact
        path={ROUTES.PS_CHECK_EMAIL}
        render={() => <PS.CheckEmail />}
      />
      <PSRoute
        exact
        path={ROUTES.PS_FORGOTPASSWORD}
        render={() => <PS.ForgotPassword />}
      />
      <PSRoute exact path={ROUTES.PS_TERMS} render={() => <PS.Terms />} />
      <PSRoute
        exact
        path={ROUTES.PS_SECURITYQUESTIONS}
        render={() => <PS.SecurityQuestions />}
      />
      <PSRoute
        exact
        path={ROUTES.PS_REGCOMPLETE}
        render={() => <PS.RegComplete />}
      />
    </>
  );
};

export default PSRoutes;
