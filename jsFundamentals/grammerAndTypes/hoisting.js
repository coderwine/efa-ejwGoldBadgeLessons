//! HOISTING
// 'use strict'; - //see Hoisting in a Function
/*
    What is Hoisting?

    - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed.
    - Only the declaration is pulled up, not the assignments.

    ? Consider like a Table of Contents at the beginning of a book.  We can, at a glimps, recognize that there are topics that we will go over; however, we don't know the exact details of these things just yet.
*/

console.log(hoistedVar);
console.log('How JS see hoistedVar: ', typeof hoistedVar);
var hoistedVar = 'Will not be defined';

// let hoistedVar = 'using let';

// How JS read this was that a variable was created.  JS actually reads the file in two passes, first to collect these noted variables and function calls, and secondly to execute the code. 'hoistedVar' is noted as existing, pulled to the top, but not defined until AFTER the console.log().  What we are seeing is the execution not being able to be defined.  

// We can test this by attempting to console.log a varibale that doesn't exist.

// console.log(noVariable);  
console.log('How JS see noVariable: ', typeof noVariable);
//? Breaks as is noted as not defined.  Meaning it doesn't exist.  A ReferenceError is thrown because of this.

//? We typically write our variables all in one step which can make the process of hoisting seem complex. Understanding that JS allows us to declare, assign and use our variables in 3 separate steps helps us understand how hoisting functions. 

var declaration;
console.log(usage);

declaration = 10;
console.log(usage);

var usage = declaration + 10;

console.log(usage);

// more commonly, this is how we would write the same process:
var commonVar = 10;
//? just remember that, in the background, prior to executing this variable, JS has already set this declaration as something that exists.


//! HOISTING IN A FUNCTION
// This process is considered the same within a function.  On the first pass, it reads it, pushes the declarations to the top and then executes them in the order that they are written.

function testHoist() {
    becomesGlobal = 'Because it is not declared, it becomes part of the global scope';
    console.log('Prior to declaring "insideFunc": ', insideFunc);
    var insideFunc = 'Rules still apply here';
    console.log(insideFunc)
}

testHoist()

console.log(becomesGlobal);
console.log('Trying to reach inside the Function ', typeof insideFunc);

//?  Once a variable is declared, it is confined to that funciton.

// It is best practice to ALWAYS declare variables regardless of whether they are in a function or global scope.  This makes it clear how it should be handled.
// We can initialize a 'use strict' method at the top of our file in order to prevent any undeclared declarations.  

//! USING LET
//  Lets recall that the keyword 'let' is block scoped and not function scoped.  

console.log(letVariable);
let letVariable = 'Using Let';
// This throws an ReferenceError due to ES6 not accepting undeclared variables.  This is to ensure we ALWAYS declare our variables FIRST.

let hoistingLet;

console.log(hoistingLet);
hoistingLet = 'But I thought...' // This pulls in an undefined.  Why?
//?  We understand that JS pulls all our declarations to the top.  Well, we are doing that purposefully for the interpreter and bypassing the 'fix' that ES6 has implemented.

//! Hoisting Function
// Function Declarations:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function');
};

// Function Expression
// These are NOT hoisted

// expressionFunc()

// let expressionFunc = function () {
//     console.log('Works?')
// }

//? Considering that declarations are pulled to the top, JS reads the assignment as a variable and not a function and therefore gives us a TypeError.

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


