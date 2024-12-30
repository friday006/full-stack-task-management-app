const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: { 
        type: String 
    },
    status: { 
        type: Boolean, 
        default: false // indicating whether the task is completed
    },
    created_at: { 
        type: Date, 
        default: Date.now // auto-generated
    },
});

module.exports = mongoose.model("Task", TaskSchema);