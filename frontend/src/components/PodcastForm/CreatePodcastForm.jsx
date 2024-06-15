import PropTypes from "prop-types";
import styles from "./CreatePodcastForm.module.css"; 

const CreatePodcastForm = ({ formData, handleChange, handleSubmit }) => {
  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    handleChange({ target: { name: "tags", value: tagsArray } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles["podcast-form"]}>
      <div className={styles["form-group"]}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className={styles["form-control"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className={styles["form-control"]}
        ></textarea>
      </div>
      <div className={styles["form-group"]}>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author"
          className={styles["form-control"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
          className={styles["form-control"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={formData.tags.join(", ")}
          onChange={handleTagsChange}
          placeholder="Enter tags (comma separated)"
          className={styles["form-control"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Cover Image URL:</label>
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Enter cover image URL"
          className={styles["form-control"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label>Date of Arrival:</label>
        <input
          type="date"
          name="dateOfArrival"
          value={formData.dateOfArrival}
          onChange={handleChange}
          className={styles["form-control"]}
        />
      </div>
      <button type="submit" className={`${styles["btn"]} ${styles["btn-primary"]}`}>
        Create Podcast
      </button>
    </form>
  );
};

CreatePodcastForm.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    coverImage: PropTypes.string.isRequired,
    dateOfArrival: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreatePodcastForm;
