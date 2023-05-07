import { useState } from "react";
import axios from "axios";

const CreateTweet = ({ setShouldRefresh }) => {
  const [tweetContent, setTweetContent] = useState("");

  const [imgUrl, setimgUrl] = useState("");

  const upload = async () => {
    try {
      await axios.post(
        "https://react-workshop-todo.fly.dev/posts/",
        {
          content: tweetContent,
          image: imgUrl,
        },

        {
          headers: {
            apiKey: "645738ea7213f63d435567e2",
          },
        }
      );

      setTweetContent("");
      setimgUrl("");
      setShouldRefresh((v) => !v);
    } catch (e) {
      console.log(e);
      alert("Error uploading tweet");
    }
  };
  const handleSubmit = () => {
    upload();
  };

  return (
    <>
      <div className="post-tweet">
        <a href=""></a>
        <textarea
          name="tweet"
          rows="3"
          placeholder="What's happening?"
          className="post-tweet-input"
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Enter image url"
          value={imgUrl}
          onChange={(e) => setimgUrl(e.target.value)}
        />

        <button
          type="text"
          className="post-tweet-btn"
          onClick={() => handleSubmit()}
        ></button>
      </div>
    </>
  );
};

export default CreateTweet;
