import axios from "axios";
import React, { useState, useEffect } from "react";

const EpisodeAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const response = await axios.get("https://podcast-mern-stack-app-3.onrender.com/api/v1/EpisodeAnalytics/");
      setAnalytics(response.data);
      setLoading(false);
    };

    fetchAnalytics();
  }, []);

  if (loading) return <p>Loading episode analytics...</p>;

  return (
    <div>
      <h2>Episode Analytics</h2>
      {analytics.map((analytic) => (
        <div key={analytic.id}>Analytics for Episode ID: {analytic.episodeId}</div>
      ))}
    </div>
  );
};

export default EpisodeAnalytics;
