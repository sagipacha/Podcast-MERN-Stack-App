const Podcast = require("../models/podcasts.model");

// Create a new podcast
const createPodcast = async (req, res) => {
  console.log("test");
  const { body } = req;
  try {
    console.log(req.user);
    body.owner = req.user.userId;
    const podcast = new Podcast(body);
    console.log(podcast);
    await podcast.save();
    res.status(201).send(podcast);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCategory = async (req, res) => {
  const { body, params } = req;
  const { category } = params;

  try {
    const categoryList = await Podcast.find({ category });
    if (categoryList) {
      res.send(categoryList);
    } else return res.status(401).send("Error");
  } catch (error) {
    console.log(error);
    res.status(401).send("Error");
  }
};

// Get all podcasts
const getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find({}).populate("owner");
    res.send(podcasts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get a single podcast by ID
const getPodcastById = async (req, res) => {
  const { id } = req.params;
  try {
    const podcast = await Podcast.findById(id);
    if (!podcast) {
      return res.status(404).send({ message: "Podcast not found" });
    }
    res.json(podcast);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Update a podcast by ID
const updatePodcastById = async (req, res) => {
  const { id } = req.params;
  try {
    const podcast = await Podcast.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }
    res.json(podcast);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a podcast by ID
const deletePodcastById = async (req, res) => {
  const { id } = req.params;
  try {
    const isDeleted = await Podcast.findByIdAndDelete(id);
    if (!isDeleted) {
      return res.status(404).send({ message: "Podcast not found" });
    }
    res.send({ message: "Podcast deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createPodcast,
  getAllPodcasts,
  getPodcastById,
  updatePodcastById,
  deletePodcastById,
  getCategory,
};
