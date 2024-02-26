import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/RenderPodcast.css";

const RenderPodcast = ({ podcasts }) => {
  const navigate = useNavigate();

  const handleLearnMore = (podcastId) => {
    // Navigate to the episodes page with the podcast ID
    navigate(`/podcast/${podcastId}/episodes`);
  };
  console.log(podcasts[0]._id);
  return (
    <div className="podcast-container">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="podcast-card">
          <img
            src={podcast.coverImage}
            alt={podcast.title}
            className="cover-image"
          />
          <div className="podcast-details">
            <h3 className="title">{podcast.title}</h3>
            <p className="description">{podcast.description}</p>
            <p className="author">By {podcast.author}</p>
            <p className="category">{podcast.category}</p>
            <p className="date">{podcast.dateOfArrival}</p>
            <button
              className="learn-more-button"
              onClick={() => handleLearnMore(podcast._id)}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderPodcast;
