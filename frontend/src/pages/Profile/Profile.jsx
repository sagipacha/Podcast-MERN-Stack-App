import { useContext } from "react";
import ProfileGuest from "../../components/ProfileGuest/ProfileGuest";
import ProfileCreator from "../../components/ProfileCreator/ProfileCreator";
import NavBar from "../../components/NavBar/NavBar";
import { UserContext } from "../../Context/User";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { role } = user.user;

  return (
    <div>
      <NavBar />
      {role === "guest" && <ProfileGuest />}
      {role === "creator" && <ProfileCreator />}
    </div>
  );
};

export default ProfilePage;
