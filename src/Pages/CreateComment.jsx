import React, { useState } from "react";
import axios from "axios";
import Tweet from "../components/Tweet";

const CreateComment = ({ tweetId }) => {
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://react-workshop-todo.fly.dev/posts/${tweetId}/comment`,
        {
          content: commentContent,
        },
        {
          headers: {
            apiKey: "645738ea7213f63d435567e2",
          },
        }
      );
      console.log(response.data);
      setComments(response.data.comments);
      // do something with response, such as updating state to show the new comment
    } catch (error) {
      console.error(error);
      // handle error, such as displaying an error message to the user
    }

    // reset the form
    setCommentContent("");
  };

  return (
    <>
      {comments.map((comment) => (
        <Tweet
          key={comment.id}
          profile={`https://avatars.githubusercontent.com/u/${comment.user.githubId}`}
          caption={comment.content}
          id={comment.id}
          name={comment.user.fullname}
          username={comment.user.name}
        />
      ))}
      <h2>Add a comment:</h2>
      <form onSubmit={handleCommentSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={commentContent}
            onChange={(event) => setCommentContent(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateComment;
