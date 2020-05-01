//NOTE
//! Comments & Console Log
//*CHALLENGE
//* For the below statements, use a single line comment and a multiline comment to separate these so they don't break our code.  Console log the results.
//! UNCOMMENT THIS OUT PRIOR TO GIVING THIS CHALLENGE!!!!!
//? Perhaps make this a Kahoots question
//? the x variable is provided.


// This is a simple comment.
let x = 1 


/*
    Here is a list of ideas for the x variable:
        1.  Perhaps it should be 10.
        2.  Increase by 1
        3.  Some other information

*/

console.log(x);


//!--------------------------------------------------------------------------------------------------

//NOTE
//! Declarations
//* CHALLENGE: 
//* Declare an empty variable using the var keyword.  Declare a variable using the 'let' keyword and give it a value of 1025.  Assign the empty variable a value of 125. 
//* create a variable using 'const' keyword and have the value equal the "var" variable + the "let" variable.
//* Console log the const variable.

var one;
let two = 125;
one = 1025;

const three = one + two;
console.log(three);

//!--------------------------------------------------------------------------------------------------

//NOTE
//! Types
//* CHALLENGE
/*
* Write a variable, using the let keyword, of each variable name and type.
* Create an object that holds three key/value pairs ('Slimer','Stay Puff','Zuul').
* Create a variable that holds an array of 4 values ('Egon', 'Ray', 'Peter', 'Winston').
* Make three console logs:
*    1) using concatenation, combine 3 of variables.
*    2) using string interpolation, inlcude two variables, the value of the second key in your object, and the 2nd index of your array.
*    3) the 'type of' one of your variables.
*/

let string = 'string';
let nothing = undefined;
let zero = null;
let number = 10;
let bool = true;

let aintAfraidOfNo = {
    one: 'Slimer',
    two: 'Stay Puff Marshmallow Man',
    three: 'Zuul'
};

let ghostBusters = ['Egon', 'Ray', 'Peter', 'Winston'];

console.log(string + ' ' + bool + ' ' + number);
console.log(`${ghostBusters[1]} said his mind was ${zero} and had an ${nothing} reason for thinking about the ${aintAfraidOfNo.two}...`);
console.log(typeof bool);


//!--------------------------------------------------------------------------------------------------

//NOTE
//! Scope
//* CHALLENGE
//* Regarding the below code, what should we expect to be the result of our console.log?
//? consider this as an interactive challenge.  Start the first aspect with the console.log outside of the addThisAlso function.  Possible build this in a "Kahoot" question...


let numOne = 1;

function addThis () {
    let numTwo = 2;    
    
    // let value = numTwo + numThree
    function addThisAlso () {
        let numThree = 3; 
        let value =  numOne + numThree
        
        console.log(value); // what should we expect?
    }

   addThisAlso();
//    console.log(value)  // What should we expect?
}

addThis();

//? ----------------------OPTION 2 by Danielle
//* What is our expected result?

let myVar = 1;

function b() {
  console.log(myVar);
}

function a() {
  let myVar = 2;
  b();
}

a();


//!--------------------------------------------------------------------------------------------------

//NOTE
//! Hoisting
//* CHALLENGE
//* What causes hoisting?  
// JS pulls all variables and function calls to the top of the document.  This results in variables being declared but not assigned.
//* You can any keyword for your variable.  
// False  - let and const are set keywords created in ES6 that doesn't allow hoisting.
//? This may be a question that can put into Kahoot

//? What should I expect from this console log?
console.log(simpson);

var simpson = 'Homer';


//?  What allows for this to work?
simpson();

function simpson() {
    console.log('Homer');
}

//!--------------------------------------------------------------------------------------------------

//NOTE
//! Literals
//* Challenge
//* Write an example of a Primitive Array Literal.
//* Write an example of a Complex Object Literal.

let complexObj = {
    name: 'Eric',
    age: 36,
    home: {
        wife: 'Anna',
        kids: true,
        kidNames: ['Lilly', 'Everly'],
        pets: 1
    }
};

let berries = ['Strawberry', 'blueberry', 'raspberry'];