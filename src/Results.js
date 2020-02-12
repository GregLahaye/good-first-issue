import React, { useEffect, useState } from "react";
import Issue from "./Issue";

const Results = ({ language }) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = new URL("https://api.github.com/search/repositories");
    const params = new URLSearchParams({
      q: `good-first-issues:>1 language:${language}`,
    });
    url.search = params.toString();

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          setIssues(response.items);
          setLoading(false);
        },
        (error, info) => {
          // TODO: add error message
          console.log(error, info);
          setLoading(false);
        },
      );
  }, [language]);

  return loading ? (
    "Loading"
  ) : (
    <div>
      <h3>{language}</h3>
      {issues.length === 0
        ? "No Issues Found"
        : issues.map((issue) => (
            <Issue key={issue.id} name={issue.full_name} url={issue.html_url} />
          ))}
    </div>
  );
};

export default Results;
