const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    tags: [
        { 
        type: String, 
        trim: true 
        }
    ],

    coverImage: { 
        type: String, 
        required: true 
    }, 
    dateOfArrival: { 
        type: Date, 
        default: Date.now 
    }, 
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',  
        required: false 
    },
    });

const Podcast = mongoose.model('Podcast', podcastSchema);
module.exports = Podcast;


