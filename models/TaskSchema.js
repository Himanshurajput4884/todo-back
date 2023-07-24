const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    date: {
        type:String,
    },
    year: {
        type:String,
    },
    month: {
        type:String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model("Tasks", TaskSchema)

module.exports = Task;
