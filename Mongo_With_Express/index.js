const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));

main()
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch(err => console.log("Connection error:", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

// New Chat Route
app.get("/chats/new",(req,res) => {
    res.render("new.ejs")
});

// Create Route
app.post("/chats",(req,res) => {
    let { from,to,msg } = req.body;
    let newChat = new Chat(
        {
            from : from,
            to : to,
            msg : msg,
            created_at: new Date()
        }
    )
    newChat.save()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        
    res.redirect("/chats");
});

// Edit Route 
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", { chat });
});

// Update Route
app.patch("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg } = req.body;
    await Chat.findByIdAndUpdate(id, { msg: msg });
    res.redirect("/chats");
});

// DELETE Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("Root is working");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
