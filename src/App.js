import Header from "./Header";
import Home from "./Home";
import React from "react";
import Repository from "./Repository";
import { Router } from "@reach/router";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Repository path="/:owner/:repo" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
