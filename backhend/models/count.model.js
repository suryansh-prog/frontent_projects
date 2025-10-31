const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Count', countSchema);