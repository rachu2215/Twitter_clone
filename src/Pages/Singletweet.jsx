import React, { useEffect, useState } from "react";
// import { SECRETS } from "Home";
import Tweet from "../components/Tweet";
import { useParams } from "react-router-dom";
import axios from "axios";

const Singletweet = () => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();

  const fetchdata = async () => {
    const resp = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey: "645738ea7213f63d435567e2",
        },
      }
    );

    console.log(resp.data);
    setTweet(resp.data.post);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      {tweet ? (
        <Tweet
          profile={`https://avatars.githubusercontent.com/u/${tweet?.user.githubId}`}
          caption={tweet?.content}
          id={tweet?.id}
          name={tweet?.user.fullname}
          username={tweet?.user.name}
          // avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}
          img={tweet?.image}
        />
      ) : null}
    </>
  );
};

export default Singletweet;
