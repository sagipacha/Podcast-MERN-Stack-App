import React, { useContext } from "react";
import { UserContext } from "../../../Context/User";
import NavBar from "../../NavBar/NavBar";

const AccountSettings = () => {

  return (
    <div>
      <NavBar />
      <div>
        <h3>Account Settings</h3>
      </div>
    </div>
  );
};

export default AccountSettings;
