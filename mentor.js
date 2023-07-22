import mongoose from "mongoose";    
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
    participants: [{
        type: ObjectId,
        ref: "Participant"
    }]
});

module.exports = mongoose.model("Mentor", appSchema); 