// ---------------------------------------------------------------------------------------
// *********************************** NodeJs ********************************************
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------

// Example 1 : Starting with Express 

// const express = require('express')
// const app = express()
// const port = 8080;

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });

// app.use((req, res) => {
//     console.log("Strating with Express: ")
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });

// ---------------------------------------------------------------------------------------

// Example 2 : Routing

// const express = require('express')
// const app = express()
// const port = 8080;

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });

// app.get("/",(req, res) => {
//     res.send("Hii,I am the root");
// });

// app.get("/orange",(req, res) => {
//     res.send("You contacted orange path");
// });

// app.get("/apple",(req, res) => {
//     res.send("You contacted apple path");
// });

// app.post("/",(req, res) => {
//     res.send("You sent a post request to root");
// });

// ---------------------------------------------------------------------------------------

// Example 3 : Path Parameter

// const express = require('express')
// const app = express()
// const port = 8080;

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });

// app.get("/",(req, res) => {
//     res.send("Hii,I am the root");
// });

// app.get("/:username/:id",(req, res) => {
//     let {username,id} = req.params;
//     res.send(`Hii,I am ${username} and my id is ${id}`);
// });

// ---------------------------------------------------------------------------------------

// Example 4 : Query Strings

// const express = require('express')
// const app = express()
// const port = 8080;

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });

// app.get("/search", (req,res) => {
//     let {q} = req.query;
//     res.send(`Search result for query : ${q}`);
// });






