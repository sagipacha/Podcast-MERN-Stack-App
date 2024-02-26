const { Router } = require("express");
const router = Router();
const {
  getAllPodcasts,
  getPodcastById,
  createPodcast,
  updatePodcastById,
  deletePodcastById,
  getCategory
} = require("../controllers/podcasts.controllers");

//get all podcasts
router.get("/", getAllPodcasts);

router.get("/category/:category", getCategory);

//get a podcast by ID
router.get("/:id", getPodcastById);

//create a new podcast
router.post("/", createPodcast);

//update a podcast by ID
router.patch("/:id", updatePodcastById);

//delete a podcast by ID
router.delete("/:id", deletePodcastById);

module.exports = router;
