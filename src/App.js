import React from "react";
import { render } from "react-dom";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

render(<App />, document.getElementById("root"));
