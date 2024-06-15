import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreatePodcastForm from "../../components/PodcastForm/CreatePodcastForm";
import { baseUrl } from "../../../utils/baseUrl";

export default function CreatePodcast() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    tags: [],
    coverImage: "",
    dateOfArrival: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [createdPodcastId, setCreatedPodcastId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(`${baseUrl}/podcasts`, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log("Podcast created:", response.data);
      setCreatedPodcastId(response.data.id);

      setFormData({
        title: "",
        description: "",
        author: "",
        category: "",
        tags: [],
        coverImage: "",
        dateOfArrival: "",
      });
    } catch (error) {
      console.error("Error creating podcast:", error);
    }
  };


  return (
    <div>
      <h1>Create a New Podcast</h1>
      <CreatePodcastForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {createdPodcastId && (
        <div>
          <h2>Create Episode</h2>
          {/* <ul>
              <li>
                <Link to="/create-episode">Create Episode</Link>
              </li>
          </ul> */}
          <ul>
            <li>
              <Link to="/create-episode">Create Episode</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
