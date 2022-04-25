import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { routes } from "@constants/routes";
import WithHeader from "@hoc/WithHeader";
import HomeClinicPage from "@features/homeClinicPage/HomeClinicPage";
import DependentsRegisterPage from "@features/dependentsPages/DependentsRegisterPage";
import DependentsViewPage from "@features/dependentsPages/DependentsViewPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={routes.home.path}
        render={WithHeader(HomeClinicPage)}
      />
      <Route
        exact
        path={routes.dependents.register}
        render={WithHeader(DependentsRegisterPage)}
      />
      <Route
        exact
        path={routes.dependents.view}
        render={WithHeader(DependentsViewPage)}
      />
      <Redirect path="*" to={routes.home.path} />
    </Switch>
  </BrowserRouter>
);

export default Router;
