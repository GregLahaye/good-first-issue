import React from "react";

const Filters = ({ language, setLanguage }) => {
  const languages = [
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "C",
    "Go",
    "Python",
    "Rust",
  ];

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <label htmlFor="language" className="input-group-text">
          Language
        </label>
      </div>
      <select
        id="language"
        value={language}
        className="custom-select"
        onChange={(e) => setLanguage(e.target.value)}
        onBlur={(e) => setLanguage(e.target.value)}
      >
        {languages.map((languageStr) => (
          <option
            key={languageStr}
            value={languageStr}
            className="btn btn-secondary m-1 language"
          >
            {languageStr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
