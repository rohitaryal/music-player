import "../styles/Body.css";
import Navigation from "./Navigation";
import Popular from "./Popular"
import AllSongs from "./AllSongs.jsx";

const Body = () => {
    return (
        <div className="main-body">
            <Navigation/>
            <Popular/>
            <AllSongs />
        </div>
    );
}

export default Body;