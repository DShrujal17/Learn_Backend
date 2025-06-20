// Import required modules
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); 
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));             

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views")); 

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "Shrujal",
        content: "I love cricket"
    },
    {
        id: uuidv4(),
        username: "Diya",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Jimit",
        content: "I love bike riding"
    },
];

// ========== ROUTES ========== //

// Show all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Form to create a new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Handle creation of a new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// Show a single post by ID
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("show.ejs", { post });
});

// Form to edit an existing post
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);

    if (!post) 
        return res.status(404).send("Post not found");

    res.render("edit.ejs", { post });
});

// Handle update of a post (PATCH)
app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);

    if (!post) 
        return res.status(404).send("Post not found");

    post.content = req.body.content; 
    res.redirect(`/posts`);
});

// Handle deletion of a post
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter(p => p.id !== id); 
    res.redirect(`/posts`);
});

// Start the server
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
