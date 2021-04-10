import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Home from "../pages/home/Home";
const Navigator = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />{" "}
          <Route path="/home" exact component={() => <Home />} />{" "}
        </Switch>
      </Router>
    </div>
  );
};

export default Navigator;
