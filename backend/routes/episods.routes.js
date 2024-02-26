const { Router } = require("express");
const router = Router();
const {
  createEpisode,
  getEpisodeById,
  updateEpisode,
  deleteEpisode,
  uploadSongAudio,
  getEpisodes,
} = require("../controllers/episodes.controllers");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// Create a new episode
router.post("/", upload.single("episodes"), createEpisode);
router.post("/add-episode/:id", upload.single("episodes"), uploadSongAudio);

// get - read an podcast Id
router.get("/:episodeId", getEpisodeById);

router.get("/:podcastId/episodes", getEpisodes);

// router.get("/category/:category", getCategory);

// Update an existing episode by ID
router.patch("/:episodeId", updateEpisode);

// Delete an episode by ID
router.delete("/:episodeId", deleteEpisode);

module.exports = router;
