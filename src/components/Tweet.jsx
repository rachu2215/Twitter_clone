import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Tweet = ({ name, username, caption, img, profile, time, id, cmnt }) => {
  return (
    <>
      <div className="tweet">
        <img className="profile-pic" src={profile} alt="Profile Picture" />
        <div className="tweet-content">
          <Header name={name} username={username} time={time} />
          <Content caption={caption} img={img} id={id} />
          <Footer id={id} cmnt={cmnt} />
        </div>
      </div>
    </>
  );
};

export default Tweet;
