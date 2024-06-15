import React from 'react';
import { Link } from 'react-router-dom';
import "./Explore.css";

const Explore = () => {
  return (
    <div className="container">
      <div className="center">
        <img
        //   src={headphonesImage} 
          alt="Sleek Modern"
          className="image"
        />
        <h2>
          Welcome to <br />
          AudioSphere
        </h2>
        <Link to="/Authentication">
          <button className="explore-button">Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
