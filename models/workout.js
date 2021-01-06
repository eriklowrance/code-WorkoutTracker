const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//setting up model for workout properties
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    excerises: Array
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout