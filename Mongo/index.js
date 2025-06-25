// ---------------------------------------------------------------------------------------
// *********************************** Mongoose ******************************************
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------

const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// ---------------------------------------------------------------------------------------

// Example 1 : Insert Single data : 

// const user1 = new User({
//   name: "Shrujal",
//   email: "shrujal@gmail.com",
//   age: 19
// });

// const user2 = new User({
//   name: "Diya",
//   email: "Diya@gmail.com",
//   age: 18
// });

// user1.save();
// user2.save();

// const user3 = new User({
//   name: "Jimit",
//   email: "jimit@gmail.com",
//   age: 22
// });

// user3
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ---------------------------------------------------------------------------------------

// Example 2 : Insert Multiple data : 

// User.insertMany([
//     {name : "Laddu",email : "laddu@gmail.com",age:19},
//     {name : "Bablu",email : "bablu@gmail.com",age:18},
//     {name : "Guddu",email : "guddu@gmail.com",age:23},
// ]).then((res) => {
//     console.log(res);
// });

// ---------------------------------------------------------------------------------------

// Example 3 : Find in Mongoose

// User.find({age : {$gte : 19}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findOne({age : {$gte : 19}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findById("685c6aee8e3b2c712938db89")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// ---------------------------------------------------------------------------------------

// Example 4 : Update in Mongoose

// User.updateOne({name : "Laddu"},{name : "Laddukumar"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// ---------------------------------------------------------------------------------------

// Example 5 : Find & Update in Mongoose

// User.findByIdAndUpdate("685c6aee8e3b2c712938db8b",{age:20},{new:false})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ---------------------------------------------------------------------------------------

// Example 5 : Delete in Mongoose

// User.deleteOne({name:"Guddu"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.deleteMany({age:20})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ---------------------------------------------------------------------------------------

// Example 7 : Find & Delete in Mongoose

// User.findByIdAndDelete("685c6aee8e3b2c712938db86",{age:20},{new:false})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ---------------------------------------------------------------------------------------

// Example 8 : Schema Validations in Mongoose

