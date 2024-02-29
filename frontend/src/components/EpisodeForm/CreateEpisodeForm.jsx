import React from "react";

const CreateEpisodeForm = ({
  podcasts,
  formData,
  handleChange,
  handleSubmit,
  handleAudioUpload,
}) => {
  // console.log(podcasts);

  const groupedPodcasts = podcasts.reduce((groups, podcast) => {
    const category = podcast.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(podcast);
    return groups;
  }, {});

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create a New Episode</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Release Date:</label>
        <input
          type="date"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Cover Image URL:</label>
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Upload Audio File:</label>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => handleAudioUpload(e.target.files[0])}
          className="form-control"
        />
      </div>

      {/* <div className="form-group">
    <label>Select Podcast:</label>
    <table className="podcast-table">
      <thead>
        <tr>
          {Object.keys(groupedPodcasts).map((category) => (
            <th key={category}>{category}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(groupedPodcasts).map((podcastsInCategory, index) => (
            <td key={index}>
              <select
                name="podcastId"
                value={formData.podcastId}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select a Podcast</option>
                {podcastsInCategory.map((podcast) => (
                  <option key={podcast.id} value={podcast.id}>
                    {podcast.title}
                  </option>
                ))}
              </select>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div> */}

      <div className="form-group">
        <label>Select Podcast:</label>
        <select
          name="podcastId"
          value={formData.podcastId}
          onChange={handleChange}
          className="form-control"
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

      <button type="submit" className="btn-primary">
        Create Episode
      </button>
    </form>
  );
};

export default CreateEpisodeForm;
