import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "./private.routes";

import Home from "./views/Home";
import Contact from "./views/Contact";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dashboard";


const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoutes path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}

export default Router;