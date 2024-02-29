import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/RenderPodcast.css";

const RenderPodcast = ({ podcasts }) => {
  const navigate = useNavigate();

  const handleLearnMore = (podcastId) => {
    navigate(`/podcast/${podcastId}/episodes`);
  };

  return (
    <div className="podcast-container">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="podcast-card">
          <div className="left-column">
            <img
              src={podcast.coverImage}
              alt={podcast.title}
              className="cover-image"
            />
            {/* <div className="buttons">
              <button className="share-button">Share</button>
              <button className="favorite-button">Favorite</button>
            </div> */}
          </div>
          <div className="right-column">
            <div className="podcast-info">
              <h3 className="title">{podcast.title}</h3>
              <p className="description">
                <strong>{podcast.description}</strong>
              </p>
              <p className="author">By {podcast.author}</p>
              
              {/* <p className="category">{podcast.category}</p> */}
            </div>
            <button
              className="learn-more-button"
              onClick={() => handleLearnMore(podcast._id)}
            >
              Show More
            </button>
            <button className="save-to-fav-button">save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderPodcast;
