import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <nav>
        {/* <Link to={"/Welcome"}>Welcome</Link> */}
        {/* <Link to={"/Authentication"}>Auth </Link> */}
        <Link to={"/home"}>Home</Link>
        <Link to={"/Profile"}>Profile</Link>
        <Link to={"/Settings"}>Settings</Link>
      </nav>

      {user?.role === "creator" && <Link to="/create-podcast"></Link>}
    </div>
  );
}
