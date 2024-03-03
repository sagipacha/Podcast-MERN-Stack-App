import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

const API_BASE_URL = "https://podcast-mern-stack-app-3.onrender.com/api/v1/users";
const API_VERIFY_URL = `${API_BASE_URL}/verification`;

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUser = async () => {
    const userToken = localStorage.getItem("token")
    // console.log(userToken);
    try {
      const res = await axios.get(`${API_BASE_URL}/getOnlineUser`, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logUser = async () => {
    try {
      const res = await axios.post(API_VERIFY_URL, { token });
      setUser(res.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error verifying token:", error);
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  const stayConnected = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      logUser();
    }
  }, [token]);

  useEffect(() => {
    getUser();
  }, []);

  const shared = { user, setUser, logUser, stayConnected, signOut };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
