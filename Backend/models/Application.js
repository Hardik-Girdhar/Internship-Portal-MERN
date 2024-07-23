const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FormData', 
        required: true
    },
    stipend: String,
    location: {
        office: String,
        stipend: String
    },
    role: String,
    company: String
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
