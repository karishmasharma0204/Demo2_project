//1. comments- single line comment
/*2. this is multi line
  comment */

//3. How to print any message on console.

/*4. Variables - container which is used to store the values.
   = is asssignment operator which is used to assign values.
   1. var - in this we can update and re-declare the variables (global scope variable)
   2. let - we can update the variables but not re-declare. (block scope variable)
   3. Const - can't be re-declared and updated. (block scope variable)
   
   Rules of defining variable names- 

   1. case- sensitive  - 'a' & 'A' both are differents.
   2. only a letter, underscore, $ - we can declare the variable names.
   3. with numbers we can't start the variable names.
   4. we can't have even spaces.
*/

/* Data-types in JS-
  Primitive: (7) = number, string, boolean, bigInt, symbol, undefined, null
  Non-primitive: Object (array,function)
*/

// 25-nov-2024
/*operators in js-
  1. Arithmatic operator (+,-,*,/) - modulus operator(%), exponent operator(**)
  2. comparison operator (==, ===, !==, +=, -=, *= , /=)
  3. assignment operator ( = )
  4. logical operator (and && , or || , not !) 
  5. Turnary operator (age>15 ? "true" : "false")
*/

/* conditional statements
1. if-else
2. if-elseif
3. nested if 
*/

// Extensions - prettier, tabnine, liveserver

//Github - (later)

// const car = {
//   name: "swift desire",
//   model: 2000,
//   color: "white",
//   weight: 200,
//   price: 1000,
//   isElectric: true,
//   actualPrice: 1000,
//   discountedPrice: 500
// };

// console.log(car.model);
// console.log(car["model"]);

// const student = {
//   fullName: "abc",
//   class: 8,
//   gender: "female",
//   rollNo: 10,
//   isPass: true,
//   isFail: false,
//   fatherName: "xyz"
// };

// console.log(student.isPass, student.fatherName);

let x = 4;
let y = 5;

// console.log(x && y);

// let name = "karishma";

// let age = 8.8;

// if (age > 18) {
//   console.log("You are eligible for vote");
// } else if (age < 18) {
//   console.log("You are not eligible for vote");
// } else {
//   console.log("Not exists");
// }

// Write a program using if-elseif-else to assign a grade based on the following conditions:

// Score >= 90: Grade A
// Score >= 80: Grade B
// Score >= 70: Grade C
// Score < 70: Grade F

// let score = prompt("enter your score");

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("Grade B");
// } else if (score >= 70) {
//   console.log("Grade C");
// } else if (score < 70) {
//   console.log("Grade F");
// } else {
//   console.log("Enter any number atleast...");
// }

// console.log(score);

let fName = prompt("Enter your name");
let age = parseInt(prompt("Enter your age"));

if (fName == "archana") {
  if (age === 45) {
    console.log("Yes, the information is correct");
  } else {
    console.log("age is not correct");
  }
} else {
  console.log("No, the information is not correct");
}
