// ---------------------------------------------------------------------------------------
// *********************************** OOPs ********************************************
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------

// Example 1 : Factory Function 

// function PersonMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi, My name is ${this.name}`);
//         },
//     };
//     return person;
// }

// ---------------------------------------------------------------------------------------

// Example 2 : Object Prototype 

// arr = [1,2,3,4,5];

// arr.__proto__.push = (n) => {
//     console.log("Pushing number :",n);
// }
// arr.push(6);

// ---------------------------------------------------------------------------------------

// Example 3 : New Operator(Constructors)

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, My name is ${this.name}`);
// }

// let p1 = new Person("Bablu",18);
// console.log(p1);
// let p2 = new Person("Laddu",19);
// console.log(p2);

// console.log(p1.talk() === p2.talk());

// ---------------------------------------------------------------------------------------

// Example 4 : Classes

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }

// let p1 = new Person("Bablu",18);
// console.log(p1);
// let p2 = new Person("Laddu",19);
// console.log(p2);

// ---------------------------------------------------------------------------------------

// Example 5 : Inheritance

// class Person {
//     constructor(name,age) {
//         console.log("Person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name,age,mark) {
//         console.log("Student class constructor");
//         super(name,age);
//         this.mark = mark;
//     }
// }

// let s1 = new Student("shrujal",19,96);
// let s2 = new Student("Diya",18,98);

// class Teacher extends Person {
//     constructor(name,age,subject) {
//         console.log("Teacher class constructor");
//         super(name,age);
//         this.subject = subject;
//     }
// }
