import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";

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
  },
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Categories</h1>
      <div className={styles["category-grid"]}>
        {categories.map((category, index) => (
          <Link key={index} to={`/podcast/categories/${category.name}`}>
            <div
              className={styles["category-square"]}
              style={{
                backgroundImage: category.backgroundImage,
              }}
            >
              <div className={styles["category-content"]}>
                <h2 className={styles["category-name"]}>{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
