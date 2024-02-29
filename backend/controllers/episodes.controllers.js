const mongoose = require("mongoose");
const Episode = require("../models/episods.model");
const {
  uploadToCloudinary,
} = require("../upload-media-cloud/uploadMediaCloud");
const { ObjectId } = require("mongodb");
const { Types } = mongoose;

// Create a new episode
// const createEpisode = async (req, res) => {
//     const { body } = req;
//     try {
//         const data = await uploadToCloudinary(req.file.path , "episodes-audio")
//         body.audioFile = data.url;
//         body.audioPublicId = data.public_id;
//         const episode = new Episode(body);
//         await episode.save();
//         res.status(201).send(episode);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

const createEpisode = async (req, res) => {
  const { body } = req;

  try {
    const data = await uploadToCloudinary(req.file.path, "episodes-audio");
    body.audioFile = data.url;
    body.audioPublicId = data.public_id;

    // Convert podcastId to ObjectId
    body.podcastId = new ObjectId(String(body.podcastId));

    const episode = new Episode(body);
    await episode.save();
    res.status(201).send(episode);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const getAllEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read an episode by ID
const getEpisodeById = async (req, res) => {
  const { episodeId } = req.params;
  try {
    const episode = await Episode.findById(episodeId);
    if (!episode) {
      return res.status(404).json({ error: "Episode not found" });
    }
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: `Error fetching episode: ${error.message}` });
  }
};

// Update an existing episode
const updateEpisode = async (req, res) => {
  const { episodeId } = req.params;
  const newData = req.body;
  try {
    const episode = await Episode.findByIdAndUpdate(episodeId, newData, {
      new: true,
    });
    if (!episode) {
      return res.status(404).json({ error: "Episode not found" });
    }
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: `Error updating episode: ${error.message}` });
  }
};

// Delete an episode by ID
const deleteEpisode = async (req, res) => {
  const { episodeId } = req.params;
  try {
    const episode = await Episode.findByIdAndDelete(episodeId);
    if (!episode) {
      return res.status(404).json({ error: "Episode not found" });
    }
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: `Error deleting episode: ${error.message}` });
  }
};

const uploadSongAudio = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "episodes-audio");
    const saveAudio = await Episode.updateOne(
      { podcastId: req.params.id },
      {
        $set: {
          audioUrl: data.url,
          audioPublicId: data.public_id,
        },
      }
    );
    res.status(200).send("podcast episode Audio upladed with success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

const getEpisodes = async (req, res) => {
  try {
    const { podcastId } = req.params;
    const episodes = await Episode.find({
      podcastId: podcastId,
    });
    if (!episodes || episodes.length === 0) {
      return res.status(404).json({
        message: "No episodes found for the specified category and podcast ID.",
      });
    }
    res.send(episodes);
  } catch (error) {
    console.error("Error fetching episodes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  uploadSongAudio,
  createEpisode,
  getEpisodeById,
  updateEpisode,
  deleteEpisode,
  getEpisodes,
  getAllEpisodes,
};
