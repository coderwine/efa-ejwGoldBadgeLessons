//! FOR LOOPS

// Loops allow us to go over a block of information or code in a determined amount of cycles.  It's important to note that it is possible for us to write code without declaring an end point. 

// Loops help us repeat a process without writing a lot of code.

/*
    DIFFERENT TYPES OF LOOPS

    For Statement
    Do While
    While
    Labeled
    Break
    Continue
    For In
    For Of
    .forEach
    .map

    Each have a purpose of their own but they ultimately do the same thing.
*/

//! Structure
//? We have to set up our loops in a way that we can 1) See where we are in a loop, 2) Consider what sort of Condition we want to run it against, and 3) Note when we are done with that condition and move on to the next iteration.

/*
    We need to:
        1) Create an Index
        2) Run a condition
        3) Change to the indexing variable (execution of condition)
*/

//? Lets count to 10:
//? We state our loop with a "for".  Within this function, we are injecting some parameters that JS will run against.  index; condition; change index -> to result.

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//? Within our parameters, we are stating an index declaration to 0.  This is our baseline.  We move on asking if that variable is less than or equal to the number 10, take that set number and add 1 value to it.  Once that is processed, return that value (in this case a console.log of that number).  Once our condition is met, we return a FALSE which ends our loop.  THIS is important to note:
/*
    for(<create index variable); <run condition>; <change index>) {
        <return results>
        <cont. until run condition is met>
    }
*/
//?  If we do not indicate what our condition is, the loop will not have a finish line and thus run until we have to force close it.

// INFINITE LOOP!
/*
    for(let i = 0; ; i++){
        console.log(i);
    }
*/
//? It's best not to run this code but feel free to do so if you want to see how it results.  *It won't break the computer* You'll just need to force stop the process.

// No Condition means that JS doesn't know when to stop and will never assume that information.

//* QUICK CHALLENGE:
//* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

//*RESULTS  
for(let i = 2; i >= -10; i = i - 4) {
    console.log(i);
}

//? We aren't limited by positive or negative numbers.  We can even cycle through variables assigned with strings.

let word = 'supercalifragilisticexpialidocious'

for(let i = 0; i < word.length; i++) {
    //? .length is a method that we can use in JS that helps us determine a value that we may not know.  What if we had a database of user information and we are trying to calculate who has the longest name?  If we were to hard code a number, we may be neglecting individuals that have a longer name or creating empty results for those who have shorter names.  *not sure why we would want to do this exactly but when we don't know what the end value of an array or object, or string, we can use length to process it to find that for us.

    console.log(i, word[i]);
    // 1) We set a value of each index and are displaying that.
    // 2) We set to display the value within the "object" of word.  Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.

    console.log(`The letter ${word[i]} is in position: ${i}`);
};


