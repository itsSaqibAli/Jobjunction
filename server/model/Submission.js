const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }, date: Date,
    winner: Boolean,
    git: String
});

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;