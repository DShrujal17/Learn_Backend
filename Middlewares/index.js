// ---------------------------------------------------------------------------------------
// *********************************** MiddleWares ***************************************
// ---------------------------------------------------------------------------------------

// Write MiddleWares in the top of the any Routes

const express = require("express");
const app = express();

app.listen(8080,() => {
    console.log("The server is listining on port 8080");
});

app.get("/",(req,res) => {
    res.send("I am root");
});

app.get("/random",(req,res) => {
    res.send("I am random");
});

// ---------------------------------------------------------------------------------------

// Example 1 : Using Next

// app.use((req,res,next) => {
//     console.log("I am middleware");
//     next();
// });

// ---------------------------------------------------------------------------------------

// Example 2 : Creating Utility Middleware

// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.hostname , req.path , req.time);
//     next();
// });

// ---------------------------------------------------------------------------------------

// Example 3 : Exploring app.use()

// app.use("/random", (res,req,next) => {
//     console.log("I am only for random");
//     next();
// });

// ---------------------------------------------------------------------------------------

// Example 4 : Api's tokens as Query String

// app.use("/api", (req,res,next) => {
//     let {token} = req.query;
//     if(token === "Give access")
//         next();
//     res.send("ACCESS DENIED!");
// });

// app.get("/api", (res,req) => {
//     res.send("Data");
// })

// ---------------------------------------------------------------------------------------

// Example 5 : Api's tokens as function

// const Token = (req,res,next) => {
//     let {token} = req.query;
//     if(token === "Give access")
//         next();
//     res.send("ACCESS DENIED!");
// }

// app.get("/api", Token,(res,req) => {
//     res.send("Data");
// })


