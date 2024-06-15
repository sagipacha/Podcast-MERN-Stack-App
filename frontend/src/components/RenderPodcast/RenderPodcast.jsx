import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./RenderPodcast.module.css";

const RenderPodcast = ({ podcasts }) => {
  const navigate = useNavigate();

  const handleLearnMore = (podcastId) => {
    navigate(`/podcast/${podcastId}/episodes`);
  };

  return (
    <div className={styles["podcast-container"]}>
      {podcasts.map((podcast) => (
        <div key={podcast.id} className={styles["podcast-card"]}>
          <div className={styles["left-column"]}>
            <img
              src={podcast.coverImage}
              alt={podcast.title}
              className={styles["cover-image"]}
            />
          </div>
          <div className={styles["right-column"]}>
            <div className={styles["podcast-info"]}>
              <h3 className={styles["title"]}>{podcast.title}</h3>
              <p className={styles["description"]}>
                <strong>{podcast.description}</strong>
              </p>
              <p className={styles["author"]}>By {podcast.author}</p>
              {/* <p className={styles["category"]}>{podcast.category}</p> */}
            </div>
            <button
              className={styles["learn-more-button"]}
              onClick={() => handleLearnMore(podcast._id)}
            >
              Show More
            </button>
            <button className={styles["save-to-fav-button"]}>Save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

RenderPodcast.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      // category: PropTypes.string, 
    })
  ).isRequired,
};

export default RenderPodcast;
