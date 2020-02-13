import React from "react";

const Issue = ({ id, title, url }) => {
  return (
    <div>
      <a href={url} target="blank">
        {title} - #{id}
      </a>
    </div>
  );
};

export default Issue;
