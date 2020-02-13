import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import Loading from "./Loading";

const Results = ({ language }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = new URL("https://api.github.com/search/repositories");
    const params = new URLSearchParams({
      q: `good-first-issues:>2 language:${language}`,
    });
    url.search = params.toString();

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then(
        (json) => {
          setRepositories(json.items);
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
    <Loading />
  ) : (
    <div>
      {repositories.length === 0 ? (
        "No Repositories Found"
      ) : (
        <ul className="list-group list-group-flush">
          {repositories.map(({ id, owner: { login: owner }, name }) => {
            const fullName = `${owner}/${name}`;

            return (
              <li key={id} className="list-group-item">
                <Link to={fullName}>{fullName}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Results;
