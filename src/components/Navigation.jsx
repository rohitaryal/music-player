import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <span className="mdi mdi-magnify"></span>
      <input type="text" name="search" id="search" placeholder="Search" />
      <span className="mdi mdi-bell-outline"></span>
      <span className="mdi mdi-cog-outline"></span>
    </div>
  );
};

export default Navigation;
