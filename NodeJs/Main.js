// ---------------------------------------------------------------------------------------
// *********************************** NodeJs ********************************************
// ---------------------------------------------------------------------------------------

// To Run the code : node fileName

// ---------------------------------------------------------------------------------------

// Example 1 : starting with NodeJs

// for(let i = 0;i<=5;i++)
// {
//     console.log("Hello",i);
// }

// ---------------------------------------------------------------------------------------

// Example 2 : process object

// let arg = process.argv;
// for(let i=2;i<=arg.length;i++)
// {
//     console.log("Hello from :",arg[i]);
// }

// ---------------------------------------------------------------------------------------

// Example 3 : module.exports and require export data from different file(math.js)

// let math = require("./math");
// console.log(math);
// console.log(math.sum(1,3));

// ---------------------------------------------------------------------------------------

// Example 4 : module.exports and require export data from different directory(Fruits)

// const info = require("./Fruits");
// console.log(info);

// ---------------------------------------------------------------------------------------

// Example 5 : Installing Package using npm

// const figlet = require("figlet");

// figlet("Shrujal", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// ---------------------------------------------------------------------------------------

// Example 6 : import module(math.js)

// import {sum,PI} from "./math.js";

// console.log(sum(4,5));
// console.log(PI);



