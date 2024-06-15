import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"; 
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
  // const { user } = useContext(UserContext);
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
        className={`${styles['navbar-icon']} ${isSidebarOpen ? styles['hide'] : ''}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <nav className={`${styles['sidebar']} ${isSidebarOpen ? styles['open'] : styles['closed']}`}>
        <div className={styles['logo-container']}>
          <img src={picture} alt="Logo" className={styles['logo']} />
        </div>

        <div className={styles['icon-wrapper']}>
          <Link to="/home">
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </Link>
          <Link to="/premium">
            <FontAwesomeIcon icon={faCoins} /> Premium
          </Link>
          <Link to="/settings">
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
