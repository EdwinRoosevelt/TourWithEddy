const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    tripId: {type: Number, required: true},
    status: String,
    title: {type: String, required: true},
    startDate: String,
    endDate: String,
    tripPlan: [{ day: Number, dayPlan: []}],
    budget: Number,
    author: String,
    onBoarders: [],
    comments: [{user: String, comment: String}],
})

module.exports = mongoose.model('Trip', TripSchema);