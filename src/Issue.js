import React from "react";

const Issue = ({ name, url }) => {
  const issuePath =
    '/issues?utf8=✓&q=is:issue+is:open+label:"good+first+issue"';

  return (
    <div>
      <a href={`${url}${issuePath}`}>{name}</a>
    </div>
  );
};

export default Issue;
