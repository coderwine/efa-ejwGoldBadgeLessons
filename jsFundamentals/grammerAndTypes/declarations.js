//! VARIABLES

//* What is a variable?
// Consider a box to be a varible.  This "box" is capable of existing to be filled at a later time or existing with information already inside of it.  There can be boxes where we change what's inside of it and boxes that we keep locked to ONLY hold a certain type of content or information.  

let a = 1;
let b = 2;
console.log(a + b);

// Naming a variable:
/*
    1) Must start with a letter, underscore, or $ dollar sign.
    2) Numbers may follow the above characters BUT cannot be first.
    3) JavaScript is case sensitive.  "hello" and "Hello" would be seen as different variables or "boxes".

    NOTE: It's best practice to name a variable that is relative to the project that you are working within.  For example, if you were working on a recipe application, you may not want to name certain variables "x" or "myMomsFav" as this wouldn't make much sense to someone else possibly reading your code.
*/


//! DECLARATIONS, INITIALIZATIONS, and ASSIGNMENTS

/*
    - Declaration is when we name our variable.
    - Initializations is set a value to our declaration when we make it.
    - Assignments refer to us giving a variable a value.  This can happen after initialization.
 */

let x;
// Declaration:  We have declared that this variable is "x".
console.log('Declaration: ', x)  // Returns "undefined" because it hasn't been defined a value yet.
let y = 10;
// Initialization: We have declared a variable and initialized it with a value.  In this case, y is the same as the number 10.
console.log('Initialization: ', y)
console.log('Adding Before: ', y+x)  //Returns NaN (which means 'Not a Number') because 10 cannot be added to "undefined" and return a number.

x = 20;
// Assignment:  We have called upon our previously declared empty "box" of "x" and assigned it a value.
console.log('Assignment: ', x)  // Return an updated value of 20.
console.log('Adding After: ', y+x)  //Returns a value because 10 added to 20 WILL return a number.

//! var, let, and const
/*
    *These are keywords used to help assign our variables.
    - var = "old" keyword for variables.  You will see this in a lot of older code and mostly likely projects that you will pickup once you have taken a job.  When we don't use a keyword, "var" is what is assumed by JavaScript.
    - let = "new" keyword that was introduced in ES6.  This is highly suggested to use in place of var because of it's predicatability.  *We'll get more into this later.
    - const = "new" keyword that sets our variable as constant value.  This is used when we want to be sure that a variable CANNOT be changed or reassigned later into our code.

    NOTE: we cannot name our variables the same as keywords.  This means that we will never have a variable (or box) labeled "let" or "var".  Here is more on that topic: https://www.w3schools.com/js/js_reserved.asp
*/

noKeyword = 'No Keyword was used';
console.log(noKeyword);

var sampleVar = 'the "var" keyword was used';
console.log(sampleVar);
sampleVar = 'Changed sampleVar with no Keyword assignment';
console.log(sampleVar);

let sampleLet = 'The "let" keyword was used';
console.log(sampleLet);
sampleLet = 'Changing a "let" variable';
console.log(sampleLet);

const sampleConst = 'A "const" keyword was used';
console.log(sampleConst);
// sampleConst = 'Trying to change a "const" keyword';  //We can't even set a new variable within our code because JS will think we are trying to manipulate a const variable is some way and will then throw an error.
// console.log(sampleConst); //breaks

// NOTE: remember that was can't use keywords as varaible names. 
// let let = 'cannot use "let" as a declaration';
// console.log(let);

//* CHALLENGE: 
//* Declare an empty variable using the var keyword.  Declare a variable using the 'let' keyword and give it a value of 1025.  Assign the empty variable a value of 125. 
//* create a variable using 'const' keyword and have the value equal the "var" variable + the "let" variable.
//* Console log the const variable.

var one;
let two = 125;
one = 1025;

const three = one + two;
console.log(three);
