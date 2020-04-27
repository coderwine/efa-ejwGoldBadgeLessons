//! SCOPE

/*
  What is scope?

  - Global:  Variables that are defined outside of a function.  Functions can have acess to variables that are within the global scope.  Consider global scope just like we would consider Earth in relation to Indiana.  There are a lot of "things" that could be happening outside of our local environment that could affect our state and a lot of "things" that wouldn't.
    In relation to JS, we could have multiple functions within one JS file.

  - Local:  Variables that are defined within a function. Within Indiana, there are aspects that we can focus on that our Global aspect doesn't consider unless we make it available.  

  - As long as your application exist, your Global Scope exist.  Local Scope only exist when your functions are called and executed.

  Why is scope important?

  Understanding the scoping aspects of your code will help you improve efficiency, track bugs and reduce them.  It can also help with any naming issues as to when you may have a variable with the same name but within different aspects of your scope.
*/

//Ex 1

let scope = 'Earth' // this is currently in the global scope of our JS file.  
//? If we ran our code currently, it would recognize this as a variable that it could access as a whole.  This variable is also available to other aspects of our code that we may want to inject this into.

//? *after comparing global/local, this variable is used to show how a function can pull a global variable.
let getFromGlobal = 'the moon!';

function localScope() {
    let scope = 'Indiana';  //consider this the "state" within the JS "world".
    console.log(`${scope} marks the local scope`);

    let kindaLocal = 'Bloomington'

    function veryLocalScope() {
        let scope = 'Indianapolis';  // Local scope within our state.
        let anotherScope = 'Fishers';  //? If this is called upon outside of this function, it wouldn't be understood.

        console.log(`${scope} is the capital of Indiana.`)
        //?  While we are within our local scope, if a variable is not found, JS attempts to locate the requested information ourside.  This is known as Scope Chain.  Consider it as a chain of command.  It looks first within the innermost aspect of itself and then outward.

        console.log(`While looking outside of my local area, I went to ${kindaLocal} at night and saw ${getFromGlobal}`)  

        // This is considered as Lexical Scope or Static Scope.  
        //? Consider how a parent/child component within HTML works.  This is very similar in that the children have access to anything within the relationship; however, the parent doesn't have access to anything within the child. 
    }

    veryLocalScope();
};

console.log(`${scope} marks the global scope`);
localScope();

console.log(`pulling a variable within a local scope:  ${anotherScope}`); 
// anotherScope is set as undefined, which it is as it hasn't been declared in the global aspect of JS. 
//? I should point out that VSCode is helping us here as well.  Notice that the variable isn't highlighting as the others do when recognized.  This is because VSCode understand that it is not "reachable" within it's scope.


let ordered = 1;

function layerOne() {
    let ordered = 2;

    function layerTwo() {
        let ordered = 3;
        console.log(ordered);
    }

    layerTwo();
    console.log(ordered);
}

layerOne();
console.log(ordered);

//Order matters!  JS reads from top to bottom and acts according to what is being asked.  JavaScript is known as a single-threaded language which means it can only execute a single task at a time.  

// In this example, we are declaring a GLOBAL variable of 'First' in our variable "ordered".  As JS reads this code, it stores the variable value in local storage and holds it there to call upon it later if needed.

// Further down, we call our function 'layerOne', prior to the console.log, and JS jumps to act out what is being asked inside it, again, starting from top to bottom.

//? As it reads further down into that function, it sees another function, layerTwo() is being called and acts that out.

// Within layerTwo() we declare a LOCAL variable of 'ordered', console.log that and JS moves on to where it left off, the console.log within layerOne() which pulls in THAT LOCAL variable of 'ordered', which is "Second".  Lastly, because it has completed layerOne() function, it can now move on to the console.log within the GLOBAL scope and pull in that variable of 'ordered', which is "First".

//! Reassignments
// Keywords matter as we are trying to explain to our program what we are intending.  This means that we can reassign values to our variables using functions.

let a = 10

function reassign() {
    a = 30  //we are keeping this variable open and, with the 'let' keyword, we are capable of changing the value that is currently being held within that variable.
    console.log(`Within this function, "a" is being set to: ${a}`);
};

console.log(`Before the reassign function, "a" is set to: ${a}`)
reassign();
console.log(`After the reassign function, "a" is set to: ${a}`)

//? Note the order that this is all placed as well.  Each command is being called from top to bottom.

//! Block Scope

// statements like "if" or loops don't create a new scope.  If a varibale is defined inside a block statement, it will remain in that scope.  However, we can utilize let and const as keywords to help us control how our variables are viewed.

var x = 2;

function letScope() {
    var x = 4;
    if(true) {
        let x = 5;  
        console.log(x);
    };
    console.log(`using let within Block Scope: ${x}`);  
}

letScope();
console.log(x);

// let and cons support the declaration of local scope inside block statements.

console.log(`-----------------------`);

function varScope() {
    var x = 4;
    if(true) {
        var x = 5;
        console.log(x);  // var doesn't obey block scope as let does.  
    };
    console.log(`using var within Block Scope: ${x}`);
}

varScope();
console.log(x);

