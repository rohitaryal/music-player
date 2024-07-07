import "../styles/Drawer.css";

const Drawer = () => {
  return (
    <div className="drawer">
      <span className="drawer-display-profile">
        <span className="user-avatar"></span>
        <span className="user-stats">
          <span className="user-name">Jospeh Jon</span>
          <span className="membership-status premium">Premium</span>
        </span>
      </span>
      <ul className="drawer-list">
        <li className="drawer-list-item active">Discover</li>
        <li className="drawer-list-item">Radio</li>
        <li className="drawer-list-item">Podcast</li>
        <li className="drawer-list-item">Trending</li>
      </ul>
      <ul className="drawer-list-v1">
        <header>Library</header>
        <li className="drawer-list-item">
          <span className="mdi mdi-history"></span>
          <span className="list-name">History</span>
        </li>
        <li className="drawer-list-item">
          <span className="mdi mdi-album"></span>

          <span className="list-name">Album</span>
        </li>
        <li className="drawer-list-item">
          <span className="mdi mdi-music"></span>
          <span className="list-name">Songs</span>
        </li>
      </ul>
      <ul className="drawer-list-v1">
        <header>Playlist</header>
        <li className="drawer-list-item">Japanese Song</li>
        <li className="drawer-list-item">Summer 2020</li>
      </ul>
    </div>
  );
};

export default Drawer;
