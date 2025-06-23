const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverRide = require("method-override");

app.use(methodOverRide("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: '',          
  database: 'teat_db'     
});

// To get random user by using Faker
let getRandomUser = () => {
  return [ 
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
 ];
}

// Home Route
app.get("/",(req,res) => {
  let q = "select count(*) from user";
  try {
    connection.query(q,(err,result) => {
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    });
  } 
  catch (err) {
    console.log(err);
    res.send("Somme error in DB");
  }
});

// User Route
app.get("/user",(req,res) => {
  let q = "select * from user";
  try {
    connection.query(q,(err,users) => {
      if(err) throw err;
      res.render("user.ejs",{users});
    });
  } 
  catch (err) {
    console.log(err);
    res.send("Somme error in DB");
  }
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});


// Update Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `select * from user where id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (formPass != user.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `update user set username = '${newUsername}' where id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

// New User Route
app.post("/user", (req, res) => {
  let { username, email, password } = req.body;
  let id = faker.string.uuid(); 

  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  let values = [id, username, email, password];

  try {
    connection.query(q, values, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Error inserting user");
  }
});

// Delete User
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = `DELETE FROM user WHERE id = ?`;

  try {
    connection.query(q, [id], (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Error deleting user");
  }
});

app.listen(port,() => {
  console.log(`app listening on port ${port}`);
})
