import Tweet from "./components/Tweet";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateTweet from "./components/CreateTweet";

import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
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
      <NavBar />
      <CreateTweet setShouldRefresh={setShouldRefresh} />

      {tweets.map((person) => {
        return (
          <Tweet
            key={person.id}
            name={person.user.fullname}
            username={person.user.name}
            // avatar={`https://avatars.githubusercontent.com/u/${person.user.githubId}`}
            img={person.image}
            caption={person.content}
            profile={`https://avatars.githubusercontent.com/u/${person.user.githubId}`}
            time={person.date}
          />
        );
      })}
    </>
  );
};
export default App;
