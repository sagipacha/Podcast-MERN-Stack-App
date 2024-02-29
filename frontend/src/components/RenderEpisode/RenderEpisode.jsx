import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/RenderEpisode.css";

const RenderEpisode = ({ episode }) => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handlePlayEpisode = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="episode-card" key={episode.id}>
      <img
        src={episode.coverImage}
        alt={episode.title}
        className="episode-cover-image"
      />
      <div className="episode-details">
        <h3 className="EpiTitle">{episode.title}</h3>
        <p>{episode.description}</p>
        <div className="episode-info">
          {/* <p>Length: {episode.length}</p> */}
          {/* <p>Release Date: {episode.releaseDate}</p> */}
          {/* <p>Start Date: {episode.scheduling?.startDate}</p>
          <p>End Date: {episode.scheduling?.endDate}</p>
          <p>Timezone: {episode.scheduling?.timezone}</p>
          <p>Date of Arrival: {episode.dateOfArrival}</p> */}
        </div>
        <br />
        <br />
        <div className="episode-controls">
          <audio ref={audioRef} controls src={episode.audioFile}></audio>
          <br />
          <button className="play-button" onClick={handlePlayEpisode}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderEpisode;
