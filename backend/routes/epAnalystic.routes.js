const { Router } = require("express");
const { 
    createEpisodeAnalytics, 
    getEpisodeAnalyticsByEpisodeId, 
    updateEpisodeAnalyticsByEpisodeId, 
    deleteEpisodeAnalyticsByEpisodeId 
} = require("../controllers/epAnalystic.controllers");
const router = Router();

// Create a new episode analytics entry
router.post("/", createEpisodeAnalytics);

// Read episode analytics by episode ID
router.get("/:episodeId", getEpisodeAnalyticsByEpisodeId);

// Update an existing episode analytics entry by episode ID
router.patch("/:episodeId", updateEpisodeAnalyticsByEpisodeId);

// Delete an episode analytics entry by episode ID
router.delete("/:episodeId", deleteEpisodeAnalyticsByEpisodeId);

module.exports = router;
