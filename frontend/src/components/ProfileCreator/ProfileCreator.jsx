import { useContext } from "react";
import { UserContext } from "../../Context/User";
import { Link } from "react-router-dom";
import styles from "./ProfileCreator.module.css";

const ProfileCreator = () => {
  const user = useContext(UserContext);
  const { role } = user.user;

  return (
    <div className={styles["profile-creator-container"]}>
      <div className={styles["profile-header"]}>
        <h1 className={styles["profile-title"]}>Welcome, {user?.fullName}</h1>
      </div>

      <div className={styles["profile-section"]}>
        <h2 className={styles["profile-section-title"]}>Personal Details</h2>
        <div className={styles["profile-details"]}>
          <div className={styles["profile-avatar"]}>
            <img src="avatar.jpg" alt="User Avatar" />
            <input type="file" accept="image/*" />
          </div>
          <div className={styles["profile-info"]}>
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

      <div className={styles["profile-section"]}>
        <h2 className={styles["profile-section-title"]}>Podcast Details</h2>
        <div className={styles["profile-podcast"]}>
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

      <div className={styles["profile-section"]}>
        <h2 className={styles["profile-section-title"]}>Social Media</h2>
        <div className={styles["profile-social-links"]}>
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

      <div className={styles["profile-section"]}>
        <h2 className={styles["profile-section-title"]}>Bio</h2>
        <p className={styles["profile-bio"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet lacus ut augue tempor fringilla.
        </p>
      </div>

      <div className={styles["profile-section"]}>
        <h2 className={styles["profile-section-title"]}>Podcast Analytics</h2>
        <div className={styles["profile-analytics"]}>
          <p>Analytics section content goes here...</p>
        </div>
      </div>

      <div className={styles["profile-section"]}>
        <h2 className={styles["profile-section-title"]}>Quick Actions</h2>
        <div className={styles["profile-actions"]}>
          <Link to="/create-podcast" className={styles["profile-action"]}>
            <i className="fas fa-microphone-alt"></i>
            <span>Create Podcast</span>
          </Link>
          <Link to="/create-episode" className={styles["profile-action"]}>
            <i className="fas fa-headphones"></i>
            <span>Create Episode</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
