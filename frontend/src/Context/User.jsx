import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

const API_BASE_URL = "https://podcast-mern-stack-app-3.onrender.com/api/v1";
const API_VERIFY_URL = `${API_BASE_URL}/users/verification`; // Update API_VERIFY_URL

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUser = async () => {
    const userToken = localStorage.getItem("token");
    try {
      const res = await axios.get(`${API_BASE_URL}/users/getOnlineUser`, { // Update the URL
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

  const forgotPasswordHandler = async (email) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/users/forgotPassword`, {
        email,
      });
      console.log(res);
      return true;
    } catch (error) {
      console.log(`error: ${error}`);
      return false;
    }
  };

  const shared = {
    user,
    setUser,
    logUser,
    stayConnected,
    signOut,
    forgotPasswordHandler,
  };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}

