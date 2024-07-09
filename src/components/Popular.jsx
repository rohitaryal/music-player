import { useState, useEffect } from "react";
import "../styles/Popular.css";
import { GetFirebase } from "../util/Firebase";
import MusicPlayer from "./Player";

const Popular = () => {
  const firebase = GetFirebase();
  const [popularSongs, setPopularSongs] = useState([]);
  const [music, setMusic] = useState({
    name: "",
    author: "",
    image: "",
    url: "",
    play: false,
  });

  useEffect(() => {
    const fetchPopularSongs = async () => {
      const data = await firebase.getData("/popular/");
      if (data.exists()) {
        setPopularSongs(data.val());
      }
    };

    fetchPopularSongs();
  }, []);

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
                    setMusic({
                      name: element.author,
                      author: element.song_name,
                      image: element.image,
                      url: "music.mp3", //element.playlink,
                      play: true,
                    });
                  }}
                >
                  Play
                </button>
              </span>
              <span
                className="music-image"
                style={{
                  backgroundImage: `url(${element.image})`,
                }}
              ></span>
            </div>
          );
        })}
      </div>
      {music.play && (
        <MusicPlayer
          name={music.song_name}
          author={music.author}
          image={music.image}
          url={music.url}
        />
      )}
    </div>
  );
};

export default Popular;
