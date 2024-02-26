import React from "react";
import { Link } from "react-router-dom";

const ProfileCreator = () => {
  return (
    <div>
      <h2>Creator Profile</h2>
      <ul>
        <li>
          <Link to="/create-podcast">Create Podcast</Link>
        </li>
        <li>
          <Link to="/create-episode">Create Episode</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCreator;
