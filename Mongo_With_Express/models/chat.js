const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true, // ✅ should be "required", not "require"
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxlength: 50,
    },
    created_at: {
        type: Date,
        required: true,
    }
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
