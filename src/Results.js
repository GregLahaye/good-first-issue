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
      {issues.length === 0 ? (
        "No Issues Found"
      ) : (
        <ul className="list-group">
          {issues.map((issue) => (
            <li key={issue.id} className="list-group-item">
              <Issue name={issue.full_name} url={issue.html_url} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;
