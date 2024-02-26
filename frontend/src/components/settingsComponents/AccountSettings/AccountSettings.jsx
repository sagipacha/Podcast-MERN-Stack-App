import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/User";
import NavBar from "../../NavBar/NavBar";

const AccountSettings = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(UserContext);

  const handleSignOut = () => {
    signOut();
    navigate("/welcome");
  };

  return (
    <div>
      <NavBar />
      <div>
        <h3>Account Settings</h3>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default AccountSettings;
