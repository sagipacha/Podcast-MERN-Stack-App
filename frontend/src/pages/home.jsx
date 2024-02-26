import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "../css/home.css";
import Podcast from "./podcast";

const categories = [
  {
    name: "Technology",
    backgroundImage: "url('path/to/technology.jpg')",
  },
  { name: "Science", backgroundImage: "url('path/to/science.jpg')" },
  { name: "Business", backgroundImage: "url('path/to/business.jpg')" },
  { name: "Health", backgroundImage: "url('path/to/health.jpg')" },
  { name: "Education", backgroundImage: "url('path/to/education.jpg')" },
  { name: "Arts & Culture", backgroundImage: "url('path/to/arts.jpg')" },
  { name: "Sports", backgroundImage: "url('path/to/sports.jpg')" },
  { name: "Comedy", backgroundImage: "url('path/to/comedy.jpg')" },
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Podcast Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link key={index} to={`/podcast/categories/${category.name}`}>
            <div
              className="category-square"
              style={{ backgroundImage: category.backgroundImage }}
            >
              <h2 className="category-name">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
