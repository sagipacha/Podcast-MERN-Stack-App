import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User";
import { useNavigate } from "react-router-dom";
import "../../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faUser,
  faGear,
  faRightFromBracket,
  faMagnifyingGlass,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import picture from "/pictures/picture.png";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { signOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/welcome");
  };

  return (
    <div>
      <div
        className={`navbar-icon ${isSidebarOpen ? "hide" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <nav className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="logo-container">
          <img src={picture} alt="Logo" className="logo" />
        </div>

        <div className="icon-wrapper">
          <Link to={"/home"}>
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
          <Link to={"/Profile"}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
          <Link to={"/search"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </Link>
          <Link to={"/premium"}>
            <FontAwesomeIcon icon={faCoins} /> Premium
          </Link>

          <Link to={"/Settings"}>
            <FontAwesomeIcon icon={faGear} /> Settings
          </Link>

          {/* {user?.role === "creator" && <Link to="/create-podcast">Create Podcast</Link>} */}
          <Link onClick={handleSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Sign out
          </Link>
        </div>
      </nav>
    </div>
  );
}
