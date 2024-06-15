import { useState, useContext } from "react";
import Axios from "axios";
import SignUp from "../../components/AuthenticationCo/SignUp/SignUp";
import { UserContext } from "../../Context/User";
import { useNavigate } from "react-router-dom";
import LogIn from "../../components/AuthenticationCo/LogIn/LogIn";
import styles from "./Authentication.module.css";

export default function Authentication() {
  const [logOrSign, setlogOrSign] = useState(false);
  const { setUser } = useContext(UserContext);
  const [userdata, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const urlLogIn =
    "https://podcast-mern-stack-app-3.onrender.com/api/v1/users/login";
  const urlRegister =
    "https://podcast-mern-stack-app-3.onrender.com/api/v1/users/register";

  const handleChange = (e) => {
    const newData = { ...userdata };
    newData[e.target.name] = e.target.value;
    setUserData(newData);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(urlLogIn, {
        email: userdata.email,
        password: userdata.password,
      });
      setUser(response.data.user);
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Token saved to local storage:", token);
      navigate("/Home");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Email or password are incorrect");
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(urlRegister, {
        fullName: userdata.fullName,
        email: userdata.email,
        password: userdata.password,
        role: !userdata.role ? "guest" : userdata.role,
      });
      setUser(response.data.user);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setlogOrSign(!logOrSign);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={styles["auth-container"]}>
      {!logOrSign ? (
        <>
          <SignUp handleSubmit={handleRegister} handleChange={handleChange} />
          <p className={styles["auth-text"]}>Have an account?</p>
          <p
            className={styles["auth-link"]}
            onClick={() => setlogOrSign(!logOrSign)}
          >
            Log in
          </p>
        </>
      ) : (
        <>
          <LogIn handleSubmit={handleLogIn} handleChange={handleChange} />
          <p className={styles["auth-text"]}>Don&apos;t have an account?</p>
          <p
            className={styles["auth-link"]}
            onClick={() => setlogOrSign(!logOrSign)}
          >
            Sign up
          </p>
        </>
      )}
    </div>
  );
}
