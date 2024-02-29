import React, { useContext } from "react";
import { UserContext } from "../../../Context/User";
import { Link } from "react-router-dom";
import "../../../css/ProfileCreator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const ProfileCreator = () => {
  const user = useContext(UserContext);
  const { role } = user.user;

  return (
    <div className="profile-creator-container">
      <div className="profile-header">
        <h1 className="profile-title">Welcome, {user?.fullName}</h1>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Personal Details</h2>
        <div className="profile-details">
          <div className="profile-avatar">
            <img src="avatar.jpg" alt="User Avatar" />
            <input type="file" accept="image/*" />
          </div>
          <div className="profile-info">
            <p>
              <strong>Full Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>role:</strong> {role}
            </p>
          </div>
        </div>
      </div>

      {/* Podcast Details */}
      <div className="profile-section">
        <h2 className="profile-section-title">Podcast Details</h2>
        <div className="profile-podcast">
          <p>
            <strong>Podcast Name:</strong> My Awesome Podcast
          </p>
          <p>
            <strong>Description:</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam sit amet lacus ut augue tempor
            fringilla.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="profile-section">
        <h2 className="profile-section-title">Social Media</h2>
        <div className="profile-social-links">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Bio */}
      <div className="profile-section">
        <h2 className="profile-section-title">Bio</h2>
        <p className="profile-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet lacus ut augue tempor fringilla.
        </p>
      </div>

      {/* Podcast Analytics */}
      <div className="profile-section">
        <h2 className="profile-section-title">Podcast Analytics</h2>
        <div className="profile-analytics">
          {/* Add analytics charts and data here */}
          <p>Analytics section content goes here...</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="profile-section">
        <h2 className="profile-section-title">Quick Actions</h2>
        <div className="profile-actions">
          <Link to="/create-podcast" className="profile-action">
            <i className="fas fa-microphone-alt"></i>
            <span>Create Podcast</span>
          </Link>
          <Link to="/create-episode" className="profile-action">
            <i className="fas fa-headphones"></i>
            <span>Create Episode</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
