import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "./private.routes";

import Home from "./views/Home";
import Courses from "./views/Courses";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dashboard";


const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoutes path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}

export default Router;