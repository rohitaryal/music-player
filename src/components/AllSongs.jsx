import { useState, useEffect } from "react";
import "../styles/AllSongs.css";
import { GetFirebase } from "../util/Firebase";

const AllSongs = () => {
  const [popularSongs, setPopularSongs] = useState([]);
  const firebase = GetFirebase();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await firebase.getData("/other/");
        if (data.exists()) {
          setPopularSongs(data.val());
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchSongs();
  }, [firebase]);

  return (
    <div className="all-songs-container">
      <header>Listen More</header>
      <div className="small-card-row-container">
        {popularSongs.map((element) => {
          console.log("HI");
          return (
            <div
              className="music-card-small"
              key={element.image}
              style={{
                backgroundImage: `url("${element.image}")`,
              }}
            >
              <span className="music-detail">
                <span className="music-name">{element.song_name}</span>
                <span className="author">
                  <span className="mdi mdi-account-music-outline"></span>
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
