const mongoose = require('mongoose');

const episodeAnalyticsSchema = new mongoose.Schema({
    episodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true
    },
    totalListens: { 
        type: Number, 
        default: 0 
    },
    totalDownloads: { 
        type: Number, 
        default: 0 
    },
    totalRatings: { 
        type: Number, 
        default: 0 
    },
    totalComments: [{
        userId: { type: String },
        comment: { type: String },
        timestamp: { type: Date }
    }],
    totalShares: { 
        type: Number, 
        default: 0 
    },
    totalFavorites: { 
        type: Number, 
        default: 0 
    },
    lastUpdated: { 
        type: Date, 
        default: Date.now 
    },
});

const EpisodeAnalytics = mongoose.model('EpisodeAnalytics', episodeAnalyticsSchema);
module.exports = EpisodeAnalytics;
