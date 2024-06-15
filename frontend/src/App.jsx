import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../src/pages/Welcome/Welcome";
import Authentication from "../src/pages/Auth/Auth";
import Profile from "../src/pages/Profile/Profile";
import Settings from "../src/pages/Settings/Settings";
import Home from "../src/pages/Home/Home";
import CreatePodcast from "../src/pages/CreatePodcast/CreatePodcast";
import CreateEpisode from "../src/pages/CreateEpisode/CreateEpisode";
import { UserContext } from "./Context/User";
import { useContext } from "react";
import Podcast from "../src/pages/Podcast/Podcast";
import Episodes from "../src/pages//Episodes/Episodes";
import ForgotPassword from "../src/components/AuthenticationCo/forgotPassword/forgotPassword";
// import { Search } from "react-router-dom";
import "./App.css";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route
          path="/authentication/forgotPassword"
          element={<ForgotPassword />}
        />

        {user !== null && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/podcast/categories/:category" element={<Podcast />} />
            <Route path="/podcast/:podcastId/episodes" element={<Episodes />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/Search" element={<search />} /> */}
            <Route path="/settings" element={<Settings />} />

            {user.role === "creator" && (
              <>
                <Route path="/create-podcast" element={<CreatePodcast />} />
                <Route path="/create-episode" element={<CreateEpisode />} />
              </>
            )}
          </>
        )}
      </Routes>
      {/* </div> */}
    </Router>
    // </ThemeProvider>
  );
};

export default App;
