const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: false
    },
    playlistImg:{
        type:String , 
        required:false
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    episodes: [
        { type: mongoose.Schema.Types.ObjectId, 
            ref: 'Episode' 
        }
    ],
    userId: {
        type : mongoose.Types.ObjectId, 
        ref: 'User'
    },
});

const Playlist = mongoose.model("Playlist" , playlistSchema);
module.exports = Playlist ;


    



