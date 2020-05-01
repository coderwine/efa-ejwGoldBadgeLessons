//! TYPES

// Types are the "types" of content that are being stored within our "boxes".

//! BOOLEAN
// True/False.  Yes/No.  On/Off.  0/1
//  Consider a light switch where we are only requiring one of two possible answers.  Is it on or off?  If off, turn it on, and so on.

let on = true;
console.log(on);

//! UNDEFINED
// Consider this as an "empty box".  JavaScript understands that there is something there but it doesn't know how to define that object, variable, "box".  A value has not yet been assigned.

let box;
console.log(box);

let box2 = undefined;
console.log(box2);
// Consider that we can actually assign a box to be undefined!  

//! NULL
//  This means that a variable has been declared and assigned as "null".  We are stating that this particular box is empty.  

let emptyBox = null;
console.log(emptyBox);
// Consider that both "undefined" and "null" both represent "no value" within our variable.  However, undefined could be something that we simply haven't defined when we plan to at a later time.  If we ever want to declare something as "nothing", it's important to be purposeful.

//! NUMBERS
let height = 6;
console.log(height);

let precise = 999999999999999; //JS is capable of being precise up to 15 digits in length.
console.log(precise);

let rounded = 9999999999999999; //Once we include 16 digits, JS will automatically round that number.
console.log(rounded);

let decimals = 0.2 + 0.1;
console.log(decimals);
// With how JS stores numbers, it doesn't quiet calculate numbers perfectly.

let mathFu = (0.2*10 + 0.1*10) / 10;
console.log(mathFu);
// Utilizing general math principles, there are ways around to getting the results where JS will fall "short" on it's own.  It should be noted that it's unlikely that you will use a math heavy constructs and, if you find you will need to, typically it's best to pull in an outside source to help solve those problems.

// Resources: https://www.w3schools.com/js/js_numbers.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

//! STRINGS
// A value within quotes.

let firstString = "double quotes";
let secondString = 'single quotes';
//? will we break?
console.log(firstString, secondString);

let notAString = 1000 + 150;
let someStrings = '1000' + '150';
console.log(notAString);
console.log(someStrings);  //JS doesn't see this as a number value and uses the '+' symbol in a different way instead of addition.  Here, it simply combines the two strings together.

let numAndString = '1000' + 150;
console.log(numAndString);  // With one of the values a string and the other a number, JS considers the number as a different type of value when sitting next to a string.  We can see use a method to find out how JS is viewing something by utilizing 'typeof'.
console.log(typeof numAndString);  //When console logging this, it returns a "string".

//! CONCATENATION
// With concatenation, we are able to "build" a series of strings and values together.
let stringOne = 'This is the beginning';
let stringTwo = 'and we can include numbers so here is a number';
let numConcat = 42;
let stringThree = 'The End!';
let concatThis = stringOne + ' ' + stringTwo + ': ' + numConcat + '.  ' + stringThree
console.log(concatThis);  // In order to get something that is readable, we have to be mindful of the spaces and any other special characters that our variables don't have.
let concatWrong = stringOne + stringTwo + numConcat + stringThree;
console.log(concatWrong);  // Here is the result when we don't include those special characters or spaces.

//! INTERPOLATION
// We can dynamically combine different value types into one in a much easier way than what concatenation offers.
let firstName = 'Eric';
let lastName = 'Winebrenner';
let age = 36;
let fullName = `My full name is ${firstName} ${lastName} and my age is ${age}.`;
console.log(fullName);
// This allows us to write less and to easily figure out what our intention is with a particular variable.

//! OBJECTS
/*
 - Consider an object as a "box" or container that holds multiple data types and their names.
 - Denoted by { } "curly brackets"
 - Objects have keys with values 
        key : 'value' - separated by a colon.
*/

let game = {
    title: 'Catan',
    minPlayer: 3,
    maxPlayer: 4,
    isFun: true
};

// We can pull various points of information within our object "game".
console.log(game);

// Dot Notation is like stepping into an object step by step.  Objects can get very detailed and can even store other objects within objects.  *more on that later.  Using dot notation, I can pull specific information within the object "game" that I want.  Such as the title.
console.log(game.title); 
console.log(typeof game);  // We can even use the typeof method to see what we are looking at here.

//Bracket Notation is another way that we can locate values within our object. 
console.log(game['isFun']); //This is a less common way to parse through objects but is possible.

//! ARRAYS
/*
    Like objects, arrays can hold multiple datatypes but they are stored in an order way.  These are denoted by square brackets [] and separated by commas.
    
    The Array Index:
        Each value within an array starts at an index of 0.
*/

let sandwhich = ['bread', 'turkey','tomato','mayo'];
//Index Position:  (0)       (1)      (2)     (3)
console.log(sandwhich);  
//? What if I wanted to find a specific item within my array?
// We can use Bracket Notation on our array to find a value.  We do this by pointing to a position rather than a key like we did in our object.
console.log(sandwhich[2])  //? What value should I expect?

//? What if I did a typeof sandwhich?
console.log(typeof sandwhich);
// JS returned "object" because arrays are built within objects in JavaScript.

//* CHALLENGE
//* Write a variable, using the let keyword, of each variable name and type.
//* Create an object that holds three key/value pairs ('Slimer','Stay Puff','Zuul').
//* Create a variable that holds an array of 4 values ('Egon', 'Ray', 'Peter', 'Winston').
//* Make three console logs:
//*    1) using concatenation, combine 3 of variables.
//*    2) using string interpolation, inlcude two variables, the value of the second key in your object, and the 2nd index of your array.
//*    3) the 'type of' one of your variables.

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

