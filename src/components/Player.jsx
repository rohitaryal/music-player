import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import "../styles/Player.css";

const Player = ({ name, author, image, url }) => {
  const [audioContext, setAudioContext] = useState(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [sourceNode, setSourceNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadAudio(url);
  }, [url]);

  async function loadAudio(url) {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const decodedBuffer = await context.decodeAudioData(arrayBuffer);
      setAudioBuffer(decodedBuffer);
    } catch (error) {
      console.error("Error loading audio:", error);
    }
  }

  function playAudio() {
    if (!audioBuffer || !audioContext) return;

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
    setSourceNode(source);
    setIsPlaying(true);
  }

  function pauseAudio() {
    if (audioContext) {
      audioContext.suspend();
      setIsPlaying(false);
    }
  }

  function resumeAudio() {
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume();
      setIsPlaying(true);
    }
  }

  function stopAudio() {
    if (sourceNode) {
      sourceNode.stop();
      setSourceNode(null);
      setIsPlaying(false);
    }
  }

  function togglePlayPause() {
    if (isPlaying) {
      pauseAudio();
    } else if (sourceNode) {
      resumeAudio();
    } else {
      playAudio();
    }
  }

  return (
    <div className="music-player" style={{
      display: "flex",
      position: "absolute",
      width: "25rem",
      bottom: "1rem",
      right: 0,
      padding: "0.5rem",
      alignItems: "center",
      backgroundColor: "#000000",
      color: "white",
      fontSize: "x-large",
      borderRadius: "10px",
    }}>
      <div className="song-image" style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "40px",
        width: "40px",
        marginRight: "1rem",
      }}></div>
      <div className="music-detail" style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "left",
      }}>
        <span className="song-name"><h5>{name}</h5></span>
        <span>{author}</span>
      </div>
      <span
        className={isPlaying ? "mdi mdi-pause-circle-outline" : "mdi mdi-play-circle-outline"}
        onClick={togglePlayPause}
      ></span>
    </div>
  );
};

const MusicPlayer = ({ name, author, image, url }) => {
  return createPortal(
    <Player name={name} author={author} image={image} url={url} />,
    document.body
  );
};

export default MusicPlayer;