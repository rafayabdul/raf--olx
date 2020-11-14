/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/pages/auth/AuthPage`, `src/pages/home/HomePage`).
 */

import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

import Login from '../pages/Login'
import SignUp from '../pages/Signup'

export const Routes = withRouter(({ history }) => {
  const isAuthorized = (localStorage.getItem("userAuthenticates") === "true") ? true : false;
  return (
    <>
    	<HomePage />
    </>
  );
});
