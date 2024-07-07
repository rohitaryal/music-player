import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <span className="search-bar-container">
        <span class="mdi mdi-magnify"></span>
        <input type="text" name="search" id="search" placeholder="Search" />
      </span>
      <span class="mdi mdi-bell-outline"></span>
      <span class="mdi mdi-cog-outline"></span>
    </div>
  );
};

export default Navigation;
