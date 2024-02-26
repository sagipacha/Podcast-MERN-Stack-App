const Playlist = require('../models/playlistCreation.model');

// Create a new playlist
const createPlaylist = async (req, res) => {
    const { name, description, playlistImg, episodes, userId } = req.body;

    try {
        const playlist = new Playlist({ name, description, playlistImg, user: userId, episodes, userId });
        await playlist.save();
        res.status(201).json(playlist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all playlists for a user
const getUserPlaylists = async (req, res) => {
    const userId = req.params.userId;

    try {
        const playlists = await Playlist.find({ userId }).populate('episodes');
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a playlist by ID
const getPlaylistById = async (req, res) => {
    const { id } = req.params;

    try {
        const playlist = await Playlist.findById(id).populate('episodes');
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a playlist by ID
const updatePlaylistById = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const playlist = await Playlist.findByIdAndUpdate(id, newData, { new: true });
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a playlist by ID
const deletePlaylistById = async (req, res) => {
    const { id } = req.params;

    try {
        const playlist = await Playlist.findByIdAndDelete(id);
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json({ message: 'Playlist deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    updatePlaylistById,
    deletePlaylistById
};