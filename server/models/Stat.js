const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true, // Store icon name like 'Camera', 'Heart', etc.
        trim: true
    },
    order: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Stat', statSchema);
