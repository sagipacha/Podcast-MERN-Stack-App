import React from "react";

const CreateEpisodeForm = ({ formData, handleChange, handleSubmit, handleAudioUpload }) => {
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
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.scheduling.startDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.scheduling.endDate}
          onChange={handleChange}
          className="form-control"
        />
      </div> */}
      <button type="submit" className="btn-primary">
        Create Episode
      </button>
    </form>
  );
};

export default CreateEpisodeForm;

