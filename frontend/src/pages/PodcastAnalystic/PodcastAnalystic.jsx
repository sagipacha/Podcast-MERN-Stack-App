import axios from "axios";
import { useState, useEffect } from "react";

const PodcastAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await axios.get("https://podcast-mern-stack-app-3.onrender.com/api/v1/PodcastAnalytics/");
      setAnalytics(response.data);
      setLoading(false);
    };

    fetchAnalytics();
  }, []);

  if (loading) return <p>Loading podcast analytics...</p>;

  return (
    <div>
      <h2>Podcast Analytics</h2>
      {analytics.map((analytic) => (
        <div key={analytic.id}>Analytics for Podcast ID: {analytic.podcastId}</div>
      ))}
    </div>
  );
};

export default PodcastAnalytics;
