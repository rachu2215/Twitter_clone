import React from "react";
import Tweet from "./Tweet";

const Content = ({ caption, img, id }) => {
  return (
    <>
      <a href={`/tweet/${id}`}>
        <p className="tweet-text">{caption}</p>
        <img className="tweet-image" src={img} width="300" alt="Tweet Image" />
      </a>
    </>
  );
};

export default Content;
