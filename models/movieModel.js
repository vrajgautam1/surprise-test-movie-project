const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: true },
    ratings: [{ user: mongoose.Schema.Types.ObjectId, rating: Number }],
    comments: [{ user: mongoose.Schema.Types.ObjectId, text: String }]
});

module.exports = mongoose.model('Movie', MovieSchema);