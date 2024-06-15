import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./home.css";
// import Footer from "../components/Footer/footer";
// import AttachedPhotos from "../components/AttachedPhotos/AttachedPhotos";
// import technology2 from "../pictures/technology2.jpg";
// import science from "../pictures/science.jpg";
// import business2 from "../pictures/business2.jpg";
// import Health from "../pictures/Health.jpg";
// import Education from "../pictures/Education.jpg";
// import Art_Culture from "../pictures/Art_Culture.jpg";
// import sports from "../pictures/sports.jpg";
// import comedy from "../pictures/comedy.jpg";
// import Travel from "../pictures/Travel.jpg";
// import Food_Cooking from "../pictures//Food_Cooking.jpg";
// import History from "../pictures/History.jpg";
// import Music2 from "../pictures/Music2.jpg";
// import Literature2 from "../pictures/Literature2.jpg";
// import Fashion from "../pictures/Fashion.jpg";
// import Gaming from "../pictures/Gaming.jpg";
// import Parenting from "../pictures/Parenting.jpg";
// import Self_Improvement from "../pictures/Self_Improvement.jpg";

const categories = [
  {
    name: "Technology",
    backgroundImage: "url('../pictures/technology2.jpg')",
  },
  {
    name: "Science",
    backgroundImage: "url('../pictures/science.jpg')",
  },
  {
    name: "Business",
    backgroundImage: "url('../pictures/business2.jpg')",
  },
  {
    name: "Health",
    backgroundImage: "url('../pictures/Health.jpg')",
  },
  {
    name: "Education",
    backgroundImage: "url('../pictures/Education.jpg')",
  },
  {
    name: "Arts & Culture",
    backgroundImage: "url('../pictures/Art_Culture.jpg')",
  },
  {
    name: "Sports",
    backgroundImage: "url('../pictures/sports.webp')",
  },
  {
    name: "Comedy",
    backgroundImage: "url('../pictures/comedy.jpg')",
  },
  {
    name: "Travel",
    backgroundImage: "url('../pictures/Travel.jpg')",
  },
  {
    name: "Food & Cooking",
    backgroundImage: "url('../pictures/Food_Cooking.jpg')",
  },
  {
    name: "History",
    backgroundImage: "url('../pictures/History.jpg')",
  },
  {
    name: "Music",
    backgroundImage: "url('../pictures/Music2.jpg')",
  },
  {
    name: "Literature",
    backgroundImage: "url('../pictures/Literature2.jpg')",
  },
  {
    name: "Fashion",
    backgroundImage: "url('../pictures/Fashion.jpg')",
  },
  {
    name: "Gaming",
    backgroundImage: "url('../pictures/Gaming.jpg')",
  },
  {
    name: "Parenting",
    backgroundImage: "url('../pictures/Parenting.jpg')",
  },
  {
    name: "Self-Improvement",
    backgroundImage: "url('../pictures/Self_Improvement.jpg')",
  },
  {
    name: "Photography",
    backgroundImage: "url('../pictures/Photography.jpg')",
  },
  {
    name: "Environment",
    backgroundImage: "url('../pictures/Environment.jpg')",
  },
  {
    name: "Pets & Animals",
    backgroundImage: "url('../pictures/Pets_Animals.jpg')",
  }
  
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link key={index} to={`/podcast/categories/${category.name}`}>
            <div
              className="category-square"
              style={{
                // backgroundColor: "black",
                backgroundImage: category.backgroundImage,
              }}
            >
              <div className="category-content">
                <h2 className="category-name">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
