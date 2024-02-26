import React, { useState } from "react";
import axios from "axios";
import CreateEpisodeForm from "../components/EpisodeForm/CreateEpisodeForm";
import { baseUrl } from "../../utils/baseUrl";
import { useParams } from "react-router-dom";

const CreateEpisode = () => {
  const { podcastId } = useParams(); 

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    coverImage: "",
    audioFile: "",
    scheduling: {
      startDate: "",
      endDate: "",
      timezone: "",
      podcastId,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAudioUpload = (file) => {
    setFormData({ ...formData, audioFile: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
  
      const audioFormData = new FormData();
      audioFormData.append("episodes", formData.audioFile);
  
      const audioResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dr7ajbbkm/upload",
        audioFormData
      );
  
      const audioFileUrl = audioResponse.data.secure_url;
  
      const episodeData = {
        ...formData,
        audioFile: audioFileUrl,
      };
  
      const episodeResponse = await axios.post(
        `${baseUrl}/episodes`,
        episodeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Episode created:", episodeResponse.data);
    } catch (error) {
      console.error("Error creating episode:", error.response ? error.response.data : error);
    }
  };
  
  
  return (
    <div>
      <CreateEpisodeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleAudioUpload={handleAudioUpload}
      />
    </div>
  );
};

export default CreateEpisode;

