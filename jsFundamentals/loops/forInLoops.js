//! FOR IN LOOPS

//? With For Loops, we are seeking an index value and running that against a condition.  For In Loops don't require us to have an index number.

//FOR IN loops don't require a numbered index like an array index.  Loops through the properties of an object.

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info);
    //? "info" is a placeholder for the infomation that we are wanting to pull from "city".  We could use a the word "bear" or "firehose" and it would produce the same result.  BUT, keeping to a standard that we are writing code in a "relative" manner and so that people reading it after us can easily follow along, I used "info".
    // 'info' has shown us the keys within our object. 

    //? What if we wanted to see those values that are represented within the object?
    console.log(city[info]);

}

/*
    for(variable IN object) {
        statment
    }
*/

// for In an array:

let list = ['milk', 'eggs', 'black beans', 'lunch meat', 'wheat bread', 'bananas'];

for(item in list) {
    //? * What happens if we conosle log item?  What should we expect?
    console.log(item); // returns the index position of our array.
    console.log(list[item])
}

//* QUICK CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';

//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let propCase;  // We've set an empty variable that we play to assign a value after our loop.

for(n in name) {  // 'n' is the index value within our variable 'name'
    n == 0 ? propCase = name[n].toUpperCase() : propCase += name[n].toLowerCase();
//     1         2               3                  4        5   
};

console.log(`${propCase}: "Engage!"`);

/*
  1) We are taking the value of the "n" index and declaring the position of 0
  2) We assign our empty varibale to equal that positioned value.
  3) If that index is 0, we will take that value and run a ".toUpperCase()"" method on it. 
  4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
  5) If the index is NOT 0, we want t run a ".toLowerCase()" method so that all letters are in proper case.

*/


