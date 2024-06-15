import { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./RenderEpisode.module.css";

const RenderEpisode = ({ episode }) => {
  const audioRef = useRef(null);

  const handlePlayEpisode = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className={styles["episode-card"]} key={episode.id}>
      <img
        src={episode.coverImage}
        alt={episode.title}
        className={styles["episode-cover-image"]}
        style={{
          maxWidth: "80%",
          maxHeight: "90%",
          objectFit: "cover",
          borderRadius: "15px",
          padding: "10px",
        }}
      />

      <div className={styles["episode-details"]}>
        <h3 className={styles["episode-title"]}>{episode.title}</h3>
        <p>{episode.description}</p>
        <br /> <br />
        <div className={styles["episode-controls"]}>
          <audio ref={audioRef} controls src={episode.audioFile}></audio>
          <br />
          <button className={styles["play-button"]} onClick={handlePlayEpisode}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

RenderEpisode.propTypes = {
  episode: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    audioFile: PropTypes.string.isRequired,
  }).isRequired,
};

export default RenderEpisode;
