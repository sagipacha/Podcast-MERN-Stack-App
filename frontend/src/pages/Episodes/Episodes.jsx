// Episodes.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../utils/baseUrl";
import RenderEpisode from "../../components/RenderEpisode/RenderEpisode";
import Navbar from "../../components/NavBar/NavBar";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { podcastId } = useParams();
  console.log(podcastId);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/episodes/${podcastId}/episodes`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setEpisodes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [podcastId]);

  if (loading) return <p>Loading episodes...</p>;
  if (episodes.length === 0) return <p>No episodes found.</p>;

  return (
    <div>
      <Navbar />
      {/* <h2>Episodes</h2> */}
      {episodes.map((episode) => (
        <RenderEpisode key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default Episodes;
