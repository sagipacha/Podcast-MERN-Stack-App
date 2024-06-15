import { useState, useEffect } from "react";
import axios from "axios";
import RenderPodcast from "../../components/RenderPodcast/RenderPodcast";
import { baseUrl } from "../../../utils/baseUrl";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/podcasts/category/${category}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setPodcasts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [category]); 
  if (loading) return <p>Loading podcasts...</p>;

  return (
    <div>
      <NavBar />
      <h1>{category} Podcasts</h1>
      <RenderPodcast podcasts={podcasts} />
    </div>
  );
};

export default Podcast;