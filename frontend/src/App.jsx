import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "../src/pages/welcome";
import Authentication from "../src/pages/authentication";
import Profile from "../src/pages/profile";
import Settings from "../src/pages/settings";
import Home from "../src/pages/home";
import CreatePodcast from "../src/pages/createPodcast";
import CreateEpisode from "../src/pages/createEpisode";
import { UserContext } from "./Context/User";
import { useContext } from "react";
import Podcast from "../src/pages/podcast";
import Episodes from "../src/pages/episodes";

const App = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <Router>
  <Routes>
    <Route path="/welcome" element={<Welcome />} />
    <Route path="/authentication" element={<Authentication />} />

    {user !== null && (
      <>
        <Route path="/home" 
        element={<Home />} />

        <Route path="/podcast/categories/:category" 
        element={<Podcast />} />

        <Route path="/podcast/:podcastId/episodes" 
        element={<Episodes />} />

        <Route path="/profile" 
        element={<Profile />} />

        <Route path="/settings" 
        element={<Settings />} />

        {user.role === "creator" && (
          <>
            
          <Route path="/create-podcast" 
          element={<CreatePodcast />} />

          {/* <Route path="/podcasts/:podcastId/create-episode" 
          element={<CreateEpisode />} /> */}

          <Route path="/create-episode" 
          element={<CreateEpisode />} />
          </>
        )}
      </>
    )}
  </Routes>
</Router>

  );
};

export default App;
