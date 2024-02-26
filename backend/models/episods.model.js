const mongoose = require('mongoose');

const episodesSchema = new mongoose.Schema({
    podcastId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Podcast",
        required: true,
    },
    title: { 
        type: String,  
        required: true 
    },
    description: { 
        type: String,  
        required: true 
    },
    length: { 
        type: String,  
        required: true 
    },
    releaseDate: { 
        type: Date,  
        required: true 
    },
    coverImage: { 
        type: String, 
        required: true 
    }, 
    audioFile: { 
        type: String,  
        required: true 
    },
    scheduling: {
        startDate: { 
            type: Date, 
            required: false 
        }, // Start date of episode availability
        endDate: { 
            type: Date,
            required: false 
         }, // End date of episode availability
        timezone: { 
            type: String,
            required: false 
        } // Timezone for scheduling
    },
});

const Episode = mongoose.model('Episode', episodesSchema);
module.exports = Episode;
