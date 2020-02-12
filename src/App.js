import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Filters from "./Filters";
import Results from "./Results";

const App = () => {
  const [language, setLanguage] = useState("JavaScript");

  return (
    <div>
      <Header />
      <Filters language={language} setLanguage={setLanguage} />
      <Results language={language} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
