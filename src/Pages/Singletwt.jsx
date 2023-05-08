import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Tweet from "../components/Tweet";
import CreateComment from "./CreateComment";

const Singletweet = ({ apiKey }) => {
  const { id } = useParams();
  const [tweet, setTweet] = useState(null);

  const fetchTweet = async () => {
    try {
      const response = await axios.get(
        "https://react-workshop-todo.fly.dev/posts/<id here>",
        {
          headers: {
            apiKey: "645738ea7213f63d435567e2",
          },
        }
      );
      setTweet(response.data.post);
    } catch (error) {
      console.error(error);
      // handle error, such as displaying an error message to the user
    }
  };

  useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <>
      {tweet(
        <Tweet
          profile={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}
          caption={tweet.content}
          id={tweet.id}
          name={tweet.user.fullname}
          username={tweet.user.name}
          img={tweet.image}
        />
      )}
    </>
  );
};

export default Singletweet;
