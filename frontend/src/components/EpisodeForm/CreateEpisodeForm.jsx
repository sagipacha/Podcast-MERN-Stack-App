import PropTypes from 'prop-types';
import styles from './CreateEpisodeForm.module.css'

const CreateEpisodeForm = ({
  podcasts,
  formData,
  handleChange,
  handleSubmit,
  handleAudioUpload,
}) => {
  const groupedPodcasts = podcasts.reduce((groups, podcast) => {
    const category = podcast.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(podcast);
    return groups;
  }, {});

  return (
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <h2>Create a New Episode</h2>
      <div className={styles['form-group']}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className={styles['form-control']}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className={styles['form-control']}
        ></textarea>
      </div>
      <div className={styles['form-group']}>
        <label>Release Date:</label>
        <input
          type="date"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          className={styles['form-control']}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Cover Image URL:</label>
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          className={styles['form-control']}
        />
      </div>
      <div className={styles['form-group']}>
        <label>Upload Audio File:</label>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => handleAudioUpload(e.target.files[0])}
          className={styles['form-control']}
        />
      </div>

      <div className={styles['form-group']}>
        <label>Select Podcast:</label>
        <select
          name="podcastId"
          value={formData.podcastId}
          onChange={handleChange}
          className={styles['form-control']}
        >
          <option value="">Select a Podcast</option>
          {Object.keys(groupedPodcasts).map((category) => (
            <optgroup key={category} label={category}>
              {groupedPodcasts[category].map((podcast) => (
                <option key={podcast.id} value={podcast._id}>
                  {podcast.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <button type="submit" className={styles['btn-primary']}>
        Create Episode
      </button>
    </form>
  );
};

CreateEpisodeForm.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    podcastId: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleAudioUpload: PropTypes.func.isRequired,
};

export default CreateEpisodeForm;
