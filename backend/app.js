const express = require("express");
const usersRouter = require("./routes/users.routes");
const podcastsRouter = require("./routes/podcasts.routes");
const podcastAnalysticRouter = require("./routes/podAnalytics.routes");
const episodesRouter = require("./routes/episods.routes");
const episodeAnalyticsRouter = require("./routes/epAnalystic.routes");
const playlistRouter = require("./routes/playlistCreation.routes");
const auth = require("./middlewares/auth");
const cors = require("cors");
const { updateEpisode } = require("./controllers/episodes.controllers");


const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/api/v1/users", usersRouter);
app.use(auth);
app.use("/api/v1/podcasts", podcastsRouter);
app.use("/api/v1/PodcastAnalystic", podcastAnalysticRouter);


app.use("/api/v1/episodes", episodesRouter);
app.use("/api/v1/EpisodeAnalytics", episodeAnalyticsRouter);

app.use("/api/v1/playlist", playlistRouter);

app.post("/uploadAudio", (req, res) => {
    uploadAudio(req.body.audio)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err.message));
});


module.exports = { app };
