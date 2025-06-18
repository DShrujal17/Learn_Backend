// ---------------------------------------------------------------------------------------
// *********************************** Miscellaneous ********************************************
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------

// Example 1 : Handling POST Request

// const express = require("express");
// const app = express();
// const port = 8080;

// app.use(express.urlencoded({extended : true}));
// app.use(express.json());

// app.get("/register",(req,res) => {
//     let { user,password } = req.params;
//     res.send(`Sending a GET response. Welcome ${user}`);
// });

// app.post("/register",(req,res) => {
//     let { user,password } = req.body;
//     res.send(`Sending a POST response. Welcome ${user}`);
// });

// app.listen(port, () => {
//     console.log(`Listening to port ${port}`);
// });
