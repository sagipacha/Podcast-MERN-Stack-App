const EpisodeAnalytics = require('../models/epAnalystic.model');

// Create a new episode analytics entry
const createEpisodeAnalytics = async (req, res) => {
    const { body } = req;
    try {
        // Adjust the structure of the body to match the schema
        const episodeAnalytics = new EpisodeAnalytics({
            episodeId: body.episodeId,
            totalListens: body.totalListens,
            totalDownloads: body.totalDownloads,
            totalRatings: body.totalRatings,
            totalComments: body.totalComments, 
            totalShares: body.totalShares,
            totalFavorites: body.totalFavorites,
            lastUpdated: Date.now() 
        });
        await episodeAnalytics.save();
        res.status(201).send(episodeAnalytics);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Read episode analytics by episode ID
const getEpisodeAnalyticsByEpisodeId = async (req, res) => {
    const { episodeId } = req.params;
    try {
        const episodeAnalytics = await EpisodeAnalytics.findOne({ episodeId });
        if (!episodeAnalytics) {
            return res.status(404).json({ error: 'Episode analytics not found' });
        }
        res.status(200).json(episodeAnalytics);
    } catch (error) {
        res.status(500).json({ error: `Error fetching episode analytics: ${error.message}` });
    }
};

// Update an existing episode analytics entry by episode ID
const updateEpisodeAnalyticsByEpisodeId = async (req, res) => {
    const { episodeId } = req.params;
    const newData = req.body;
    try {
        const episodeAnalytics = await EpisodeAnalytics.findOneAndUpdate({ episodeId }, newData, { new: true });
        if (!episodeAnalytics) {
            return res.status(404).json({ error: 'Episode analytics not found' });
        }
        res.status(200).json(episodeAnalytics);
    } catch (error) {
        res.status(500).json({ error: `Error updating episode analytics: ${error.message}` });
    }
};

// Delete an episode analytics entry by episode ID
const deleteEpisodeAnalyticsByEpisodeId = async (req, res) => {
    const { episodeId } = req.params;
    try {
        const episodeAnalytics = await EpisodeAnalytics.findOneAndDelete({ episodeId });
        if (!episodeAnalytics) {
            return res.status(404).json({ error: 'Episode analytics not found' });
        }
        res.status(200).json(episodeAnalytics);
    } catch (error) {
        res.status(500).json({ error: `Error deleting episode analytics: ${error.message}` });
    }
};

module.exports = {
    createEpisodeAnalytics,
    getEpisodeAnalyticsByEpisodeId,
    updateEpisodeAnalyticsByEpisodeId,
    deleteEpisodeAnalyticsByEpisodeId
};
