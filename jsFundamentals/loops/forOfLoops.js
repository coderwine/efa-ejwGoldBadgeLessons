//! FOR OF Loops    

// In order to run a FOR OF loop, the 'thing' must be numbered like an array.

let object = {
    string: 'Peter',
    boolean: true,
    number: 1
};

// for(item of object){
//     console.log(item);
// }
//? Because the object isn't indexed like an array, we are unable to loop items "of" that object.  We can't be sure what is "of" this particular object.

let indexArray = ['spot 1', 2, true, 'not fifth'];

for (let spot of indexArray) {
    console.log(spot, 'was run through a "for of" loop');
}
/*
    for(variable of iterable) {
        statement
    };
*/

//? We are capable of iterating over the values within this array or "of" this array.

/*
? Quick Recap:
    for loop: loops through a block of code until the counter reaches a specified number
    for in loop:  loops through properties of an object
    for of loop:  loops over iterable objects as as arrays and strings *remember, a string can be accessed in much of the same way as an array.

*/

//* CHALLENGE
//* Created an array of animals:  mouse, cat, dog, bird, and pig.  Using a for of loop, console log each animals respective "sound" (ex: 'meow' when it returns 'cat').

let animals = ['mouse', 'cat', 'dog', 'bird', 'pig'];

for(let animal of animals) {
    animal === 'mouse' ? console.log('squeak') : animal === 'cat' ? console.log('meow') : animal === 'dog' ? console.log('bow wow') : animal === 'bird' ? console.log('taught I taw a putty tat...') : console.log('that\'s all folks!');
}