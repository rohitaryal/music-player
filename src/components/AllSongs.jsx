import { useState } from "react";
import "../styles/AllSongs.css";
import { GetFirebase } from "../util/Firebase";

const AllSongs = () => {
  const [popularSongs, setPopularSongs] = useState([]);
  const firebase = GetFirebase();

  firebase.getData("/other/").then((data) => {
    if (data.exists()) {
      setPopularSongs(data.val());
    }
  });

  return (
    <div className="all-songs-container">
      <header>Listen More</header>
      <div className="small-card-row-container">
        {popularSongs.map((element) => {
          return (
            <div className="music-card-small" key={element.image}>
              <span className="music-detail">
                <span className="music-name">{element.song_name}</span>
                <span className="author">
                  <span
                    className="mdi mdi-account-music-outline"
                    style={{
                      backgroundImage: element.image,
                    }}
                  ></span>
                  <span className="author-name">{element.author}</span>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSongs;
