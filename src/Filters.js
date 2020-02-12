import React from "react";

const Filters = ({ handleClick }) => {
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
    <div>
      {languages.map((language) => (
        <button
          key={language}
          id={language}
          onClick={(e) => handleClick(e.target.id)}
          className="btn btn-secondary m-1 language"
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default Filters;
