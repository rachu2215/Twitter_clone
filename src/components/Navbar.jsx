import "./nav.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="twitter_clone.jpg"
            alt="Twitter Logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search Twitter"
            className="navbar-search-input"
          />
          <button className="navbar-search-btn">Search</button>
        </div>
        <div className="navbar-links">
          <ul className="navbar-links-list">
            <li className="navbar-links-item">
              <a href="#">Home</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Explore</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Notifications</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Messages</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Bookmarks</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Lists</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">Profile</a>
            </li>
            <li className="navbar-links-item">
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
