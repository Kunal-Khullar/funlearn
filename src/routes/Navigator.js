import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Home from "../pages/home/Home";
import Stream from "../pages/stream/stream";
import { SocketContextProvider } from "../context/SocketContext";
const Navigator = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />{" "}
          <Route path="/home" exact component={() => <Home />} />{" "}
          <Route
            path="/stream"
            exact
            component={() => (
              <SocketContextProvider>
                <Stream />
              </SocketContextProvider>
            )}
          />{" "}
        </Switch>
      </Router>
    </div>
  );
};

export default Navigator;
