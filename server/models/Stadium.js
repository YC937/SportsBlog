const mongoose = require('mongoose');
const { Schema } = mongoose;

const stadiumSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    team: String,
    description: String
});

const Stadium = mongoose.model('Stadium', stadiumSchema);

module.exports = Stadium;