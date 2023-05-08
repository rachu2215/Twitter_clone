import { useState } from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";

const Footer = ({ id, cmnt }) => {
  // const [count, setCount] = useState(0);
  // const toggle = () => {
  //   setCount((count) => count + 1);
  // };
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  return (
    <div className="tweet-footer">
      <a href={`/tweet/${id}/${cmnt}`}>
        <button className="btn-reply">Reply</button>
      </a>
      <button className="btn-retweet">Retweet</button>
      {isLiked ? (
        <UnlikeButton toggle={toggle} />
      ) : (
        <LikeButton toggle={toggle} />
      )}
      <button className="btn-share">Share</button>
    </div>
  );
};

export default Footer;
