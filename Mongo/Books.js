// ---------------------------------------------------------------------------------------

// Example : Schema Validations in Mongoose

const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
        },
        author : {
            type : String,
        },
        price : {
            type : Number,
        },
        discount : {
            type : Number,
            default : 0,
        },
        category : {
            type : String,
            enum : ["fiction","Non-finction"],
        }
    }
);

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title : "Programmin in c++",
    price : "1200",
    category:"Non-finction",
});

book1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });