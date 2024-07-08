import { useState } from "react";
import "../styles/Popular.css";
import { GetFirebase } from "../util/Firebase";

const Popular = () => {
  const firebase = GetFirebase();
  const [popularSongs, setPopularSongs] = useState([]);

  firebase.getData("/popular/").then((data) => {
    if (data.exists()) {
      setPopularSongs(data.val());
    }
  });

  return (
    <div className="popular-card">
      <header>Popular</header>
      <div className="card-container">
        {popularSongs.map((element) => {
          return (
            <div className="music-card-big" key={element.image}>
              <span className="music-detail">
                <h2>{element.song_name}</h2>
                <span className="author">
                  <span className="mdi mdi-account-music-outline"></span> &nbsp;
                  <span className="author-name">{element.author}</span>
                </span>
                <button
                  onClick={() => {
                    window.open(element.playlink, "_blank");
                  }}
                >
                  Play
                </button>
              </span>
              <span
                className="music-image"
                style={{
                  backgroundImage: element.image,
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
