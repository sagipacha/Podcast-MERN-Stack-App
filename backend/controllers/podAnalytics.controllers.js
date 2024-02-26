const PodcastAnalystic = require('../models/podAnalytics.model');

// Create a new podcast analystic entry
const createPodcastAnalystic = async (req, res) => {
    const { body } = req;
    try {
        const podcastAnalystic = new PodcastAnalystic(body);
        await podcastAnalystic.save();
        res.status(201).send(podcastAnalystic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read podcast analystic by podcast ID
const getPodcastAnalysticByPodcastId = async (req, res) => {
    const { podcastId } = req.params;
    try {
        const podcastAnalystic = await PodcastAnalystic.findOne({ podcastId });
        if (!podcastAnalystic) {
            return res.status(404).json({ error: 'Podcast analystic not found' });
        }
        res.status(200).json(podcastAnalystic);
    } catch (error) {
        res.status(500).json({ error: `Error fetching podcast analystic: ${error.message}` });
    }
};

// Update an existing podcast analystic entry by podcast ID
const updatePodcastAnalysticByPodcastId = async (req, res) => {
    const { podcastId } = req.params;
    console.log(podcastId);
    const newData = req.body;
    try {
        const podcastAnalystic = await PodcastAnalystic.findOneAndUpdate({ podcastId: podcastId }, newData, { new: true });
        if (!podcastAnalystic) {
            return res.status(404).json({ error: 'Podcast analystic not found' });
        }
        res.status(200).json(podcastAnalystic);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: `Error updating podcast analystic: ${error.message}` });
    }
};



// Delete a podcast analystic entry by podcast ID
const deletePodcastAnalysticByPodcastId = async (req, res) => {
    const { podcastId } = req.params;
    try {
        const podcastAnalystic = await PodcastAnalystic.findOneAndDelete({ podcastId });
        if (!podcastAnalystic) {
            return res.status(404).json({ error: 'Podcast analystic not found' });
        }
        res.status(200).json(podcastAnalystic);
    } catch (error) {
        res.status(500).json({ error: `Error deleting podcast analystic: ${error.message}` });
    }
};

module.exports = {
    createPodcastAnalystic,
    getPodcastAnalysticByPodcastId,
    updatePodcastAnalysticByPodcastId,
    deletePodcastAnalysticByPodcastId
};