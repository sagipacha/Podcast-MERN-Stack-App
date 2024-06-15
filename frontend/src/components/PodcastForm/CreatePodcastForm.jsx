import React from "react";
import "./CreatePodcastForm";

const CreatePodcastForm = ({ formData, handleChange, handleSubmit }) => {
  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    handleChange({ target: { name: "tags", value: tagsArray } });
  };

  return (
    <form onSubmit={handleSubmit} className="podcast-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={formData.tags.join(", ")} 
          onChange={handleTagsChange} 
          placeholder="Enter tags (comma separated)"
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
          placeholder="Enter cover image URL"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Date of Arrival:</label>
        <input
          type="date"
          name="dateOfArrival"
          value={formData.dateOfArrival}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Podcast
      </button>
    </form>
  );
};

export default CreatePodcastForm;
