// ---------------------------------------------------------------------------------------
// *********************************** EJS ********************************************
// ---------------------------------------------------------------------------------------

// EJS = Embedded JavaScript templates

// ---------------------------------------------------------------------------------------

// Example 1 : Basic EJS

// const express = require("express");
// const app = express();
// const port = 8080;

// app.set("view engine","ejs");

// app.get("/",(req,res) => {
//     res.render("home");
// }); 

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });

// ---------------------------------------------------------------------------------------

// Example 2 : View Directory(From parent to child finding a path)

// const express = require("express");
// const app = express();
// const port = 8080;
// const path = require("path");

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"));

// app.get("/",(req,res) => {
//     res.render("home.ejs");
// }); 

// app.get("/home",(req,res) => {
//     res.render("home");
// }); 

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });

// ---------------------------------------------------------------------------------------

// Example 3 : Passing data to EJS

// const express = require("express");
// const app = express();
// const port = 8080;
// const path = require("path");

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

// app.get("/rolldice",(req,res) => {
//     let diceVal = Math.floor(Math.random() * 6) + 1;
//     res.render("rollDice.ejs",{ diceVal });
// });

// app.listen(port,() => {
//     console.log(`listening on port ${port}`)
// });

// ---------------------------------------------------------------------------------------

// Example 4 : Instagram EJS

// const express = require("express");
// const app = express();
// const port = 8080;
// const path = require("path");

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

// app.get("/ig/:username",(req,res) => {
//     let followers = ["Diya","jimit","vrund","Bablu"];
//     let {username} = req.params;
//     res.render("instagram",{username , followers});
// });

// app.listen(port,() => {
//     console.log(`listening on port ${port}`)
// });

// ---------------------------------------------------------------------------------------

// Example 5 : Instagram page with EJS

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
    console.log(data);
    res.render("instagram2.ejs", { data });
});

app.listen(port,() => {
    console.log(`listening on port ${port}`)
});



