const { Router } = require("express");
const router = Router();
const {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    updatePlaylistById,
    deletePlaylistById
} = require("../controllers/playlistCreation.controllers");


// Create a new playlist
router.post("/", createPlaylist);

// Get all playlists for a user
router.get("/:userId", getUserPlaylists);

// Get a playlist by ID
router.get("/:id", getPlaylistById);

// Update a playlist by ID
router.patch("/:id", updatePlaylistById);

// Delete a playlist by ID
router.delete("/:id", deletePlaylistById);

module.exports = router;
