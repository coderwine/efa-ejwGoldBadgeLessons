//! FUNCTIONS

//?  What are functions?

/* 
Functions are processes that we can call upon in order to run an action.  They do the following:
    - Take in input so that it can process it, modify it or just respond to it.
    - Returns a value (but not always)
    - Can be invoked (called upon) as often as needed.
*/ 

//          (1)        (2)     
function nameOfFunction()  {
//    (3)
    return value
};
//    (4)
nameOfFunction();

// We create a function by providing it a name (1), a parameter note (2) and give it a statement to process (3).  Finally, we must call upon this function to tell JS to run it.  This is called invoking (4) a function.
//? Consider a car, toaster, coffee maker... these are things that are capable of producing results for us such as taking us to a new location, make our bread crispy or brew us a pot of coffee; however, none of this will happen unless we tell it to do so.
// The parameter is something that we can process within the function but isn't required.

//! Function Declaration
//ex: 1
function funcOne() {
    console.log('Returned Statement within a Declaration')
};

funcOne();  // WE invoke the function by it's declared name

//! Function Expression
// Assigning a function to a variable is what is called an Expression.
let first = function funcTwo() {
    console.log('Returned Statement within an Expression')
}

first();  // We invoke the function by it's expressed name

//! Anonymous Functions
// Anonymous Functions are stored in memory but the runtime doesn't automatically create a reference to it.  
//? The main use is to pass these functions through another function.  Perhaps having a ternary within a main function that runs a new function if True otherwise, run a different function.

// function(){
//     return statement
// }

let test 

// Common use is to assign these to a variable.  
let anon = function(){
    console.log('anonymous function');
};

anon();

//! Parameters
//? We mainly use functions to pass information through it and return a result.
// Parameters allow us to accept information already declared.

function parameterFunc(num) {
    // console.log(num);
    console.log(num + 1);
}

parameterFunc(2); // We are not only invoking our function but also injecting the information we want to pass through it.  //? what should we see as our result here?
parameterFunc(9);

//?What if we passed in a variable already declared?
let passNum = 20;
parameterFunc(passNum);
let passThis = "I like the Number: ";
parameterFunc(passThis);

//? Imagine you have a response on your web application when a user, lets say "Jane Doe", logs in that it simply says, "Hi, Jane!  Welcome back!".  How could we build this regardless of who logs in?  We know Jane probably wouldn't be the only person to log in.

let firstName = "Jane";
let lastName = "Doe";

//                 (1)    (2)
function greeting(first, last) {
        //             (1)
    console.log(`Hi, ${first}!  Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
                                    //          (2) 
    console.log(`This is the last parameter: ${last}`);
};

// The parameter is a naming convention that is specific to that function alone.  'first' and 'last' could be named 'nameOne' and 'nameTwo' and it wouldn't have any affect on the variables being passed into it.  We would just need to be sure that 'nameOne' and 'nametwo' is referenced within our statement inside of our function. 

greeting(firstName);
greeting(lastName);
//? But we have two parameters that are noted within the function.  What happens to the second?
// Parameters are optional and are read from left to right.  Of course, depending on our statement within the funciton, this could affect how our results are returned.
greeting();
greeting(firstName, lastName);
greeting(firstName, null);
greeting( '', lastName);

//*CHALLENGE
/*
*   Create an array of users (5-6 people).
*   Pass the array within a function declaration called 'listUsers' and, console log each user within the array.
*/

let users = ['Dan','Natalie','Dave','Tony','Anna','Zach'];

function listUsers(list){
    for(user of list){
        console.log(user);
    }
}

listUsers(users);

//* Add. CHALLENGE 
//* Using the same array, create a function expression and pass that array through it that outputs a console log of the first 2 names.

let buildList = function listUsersAgain(list){
    for(i=0; i < 2; i++) {
        console.log(list[i]);
    }
}

buildList(users);
