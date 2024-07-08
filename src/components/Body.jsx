import "../styles/Body.css";
import Navigation from "./Navigation";
import Popular from "./Popular"

const Body = () => {
    return (
        <div className="main-body">
            <Navigation/>
            <Popular/>
        </div>
    );
}

export default Body;