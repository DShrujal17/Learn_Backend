const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch(err => console.log("Connection error:", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: "Shrujal",
        to: "Diya",
        msg: "I love u bablu",
        created_at: new Date()
    },
    {
        from: "Diya",
        to: "Shrujal",
        msg: "I love u too laddu",
        created_at: new Date()
    },
    {
        from: "Jimit",
        to: "Dhruvi",
        msg: "let's go for walk",
        created_at: new Date()
    },
    {
        from: "Digo",
        to: "Vraj",
        msg: "let's play game",
        created_at: new Date()
    },
    {
        from: "Bablu",
        to: "laddu",
        msg: "I miss u so much",
        created_at: new Date()
    },
];

Chat.insertMany(chats);