import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import "./App.css";

// const themeOptions = {
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#white',
//     },
//     secondary: {
//       main: '#black',
//     },
//   },
// };

const App = () => {
  const { user } = useContext(UserContext);
  // const [darkMode, setDarkMode] = useState(false);

  // const theme = createTheme({
  //   ...themeOptions,
  //   palette: { ...themeOptions.palette, mode: darkMode ? 'dark' : 'light' },
  // });

  return (
    // <ThemeProvider theme={theme}>
      <Router>
        {/* <div style={{ backgroundColor: darkMode ? '#121212' : '#FFFFFF', minHeight: '80vh' }}> */}
          {/* NavBar Component */}
          {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />  */}

          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/authentication" element={<Authentication />} />

            {user !== null && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/podcast/categories/:category" element={<Podcast />} />
                <Route path="/podcast/:podcastId/episodes" element={<Episodes />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
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
