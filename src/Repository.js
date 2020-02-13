import React, { useEffect, useState } from "react";
import Issue from "./Issue";
import Loading from "./Loading";

const Detail = ({ owner, repo }) => {
  const fullName = `${owner}/${repo}`;
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = new URL(`https://api.github.com/repos/${owner}/${repo}/issues`);
    const params = new URLSearchParams({
      labels: `good first issue`,
    });
    url.search = params.toString();

    fetch(url)
      .then((response) => response.json())
      .then(
        (json) => {
          setIssues(json);
          setLoading(false);
        },
        (error, info) => {
          // TODO: add error message
          console.log(error, info);
          setLoading(false);
        },
      );
  }, [owner, repo]);

  return (
    <div>
      <div className="container">
        <h1 className="display-3">{fullName}</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {issues.length === 0 ? (
            "No Issues Found"
          ) : (
            <div>
              <ul className="list-group">
                {issues.map((issue) => (
                  <li key={issue.id} className="list-group-item">
                    <Issue
                      id={issue.id}
                      title={issue.title}
                      url={issue.html_url}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;
