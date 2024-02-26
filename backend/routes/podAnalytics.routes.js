const { Router } = require("express");
const { 
    createPodcastAnalystic, 
    getPodcastAnalysticByPodcastId, 
    updatePodcastAnalysticByPodcastId, 
    deletePodcastAnalysticByPodcastId 
} = require("../controllers/podAnalytics.controllers");
const router = Router();



// Create a new podcast analystic entry
router.post("/", createPodcastAnalystic);

// Read podcast analystic by podcast ID
router.get("/:podcastId", getPodcastAnalysticByPodcastId);

// Update an existing podcast analystic entry by podcast ID
router.patch("/:podcastId", updatePodcastAnalysticByPodcastId);

// Delete a podcast analystic entry by podcast ID
router.delete("/:podcastId", deletePodcastAnalysticByPodcastId);

module.exports = router;
