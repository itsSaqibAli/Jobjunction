const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }, name: String,
    description: String,
    norms: [String],
    start: Date,
    end: Date,
    enrolled: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Team'
    }, submitted: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Submission'
    }, winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;