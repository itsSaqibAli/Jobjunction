const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, other: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    }
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;