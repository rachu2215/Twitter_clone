import Tweet from "../components/Tweet";

import NavBar from "../components/NavBar";
import CreateTweet from "../components/CreateTweet";

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  let secret = "645738ea7213f63d435567e2";
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all?",
      {
        headers: {
          apiKey: "645738ea7213f63d435567e2",
        },
      }
    );
    setTweets(posts.data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
      <CreateTweet setShouldRefresh={setShouldRefresh} />

      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet._id}
            name={tweet.user.fullname}
            username={tweet.user.name}
            // avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}
            img={tweet.image}
            caption={tweet.content}
            profile={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}
            time={tweet.date}
            id={tweet._id}
          />
        );
      })}
    </>
  );
};
export default Home;
