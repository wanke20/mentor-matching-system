var mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const appSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model("Participant", appSchema); 