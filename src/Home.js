import React, { useState } from "react";
import Filters from "./Filters";
import Results from "./Results";

const Home = () => {
  const [language, setLanguage] = useState("JavaScript");

  return (
    <div>
      <Filters language={language} setLanguage={setLanguage} />
      <Results language={language} />
    </div>
  );
};

export default Home;
