import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <div className="links">
          <h3>Other Projects</h3>
          <ul>
            <li>
              <a href="#">Project 1</a>
            </li>
            <li>
              <a href="#">Project 2</a>
            </li>
            <li>
              <a href="#">Project 3</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
