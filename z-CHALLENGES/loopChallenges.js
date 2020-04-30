//NOTE
//* CHALLENGE: ---------------                                 FOR LOOP
//* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

//*RESULTS  
for(let i = 2; i >= -10; i = i - 4) {
    console.log(i);
}


//!--------------------------------------------------------------------------------------------------

//NOTE
//* CHALLENGE: ---------------                                 FOR IN LOOP
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';

//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let propCase;  // We've set an empty variable that we play to assign a value after our loop.

for(n in name) {  // 'n' is the index value within our variable 'name'
    n == 0 ? propCase = name[n].toUpperCase() : propCase += name[n].toLowerCase();
//     1         2               3                  4        5   
};

console.log(`${propCase}: "Engage!"`);

//!--------------------------------------------------------------------------------------------------

//NOTE
//* CHALLENGE  ---------------                                 FOR OF LOOP
//* Created an array of animals:  mouse, cat, dog, bird, and pig.  Using a for of loop, console log each animals respective "sound" (ex: 'meow' when it returns 'cat').

let animals = ['mouse', 'cat', 'dog', 'bird', 'pig'];

for(let animal of animals) {
    animal === 'mouse' ? console.log('squeak') : animal === 'cat' ? console.log('meow') : animal === 'dog' ? console.log('bow wow') : animal === 'bird' ? console.log('taught I taw a putty tat...') : console.log('that\'s all folks!');
}


//!--------------------------------------------------------------------------------------------------
