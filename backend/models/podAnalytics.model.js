const mongoose = require("mongoose");

const podcastAnalysticSchema = new mongoose.Schema({
  podcastId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Podcast",
    required: true,
  },
  totalListens: {
    type: Number,
    default: 0,
  },
  totalDownloads: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  totalComments: {
    type: Number,
    default: 0,
  },
  totalShares: {
    type: Number,
    default: 0,
  },
  totalFavorites: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  revenue: { 
    type: Number, 
    default: 0 
},
});

const PodcastAnalystic = mongoose.model(
  "PodcastAnalystic",
  podcastAnalysticSchema
);
module.exports = PodcastAnalystic;
