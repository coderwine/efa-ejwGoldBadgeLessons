//! WHILE LOOPS

// As long as a condition is true, a while loop will execute.

while (condition) {
    return statement
}

// The condition is what is evaluated before the loop is executed and moves into whatever the statement is that we decide to run.  This could be any functionality that we want.  Once this condition returns a false, JS will break from that loop and move on to the rest of your code.   

//---------------------------------------------------------------------//

// let age = 18;

// while(age < 22) {
//     age++
//     console.log(age);
// };

//? We have set a variable with 18.  Using a While Loop, we are checking to see if it is less than 22 and, if that is true, increase the value.

//? We can create different aspects to check against that are similar other methods of solving our problems.

//ex: 1 
let age = 18;

while(age < 21) {
    age++
    age < 21 ? console.log(`You're ${age} and too young to drink`) : console.log(`You're ${age} so you are able to drink.`)
};

//ex: 2
let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday', 'Sunday'];
let checkmark = 0
let plan = 7;

while(checkmark < plan) {
    checkmark++;
    console.log(`${day[checkmark-1]} Checked!`);
}



//*CHALLENGE
/*
* Create two variables, 'runner' with a value of 0 and 'lap' with a value of 10.

* Within a while loop, console log each pass the runner goes around in a lap.  Consider that the runner will be going around until there no more laps to complete.  While they take a lap, console log the position of laps.  The final console log should detail how many laps the runner has taken.
*/


let runner = 0;
let lap = 10;

while (lap > 0) {
    lap === 10 ? console.log(`The runner starts at ${lap} laps!`) : null;

    runner++;
    lap--;

    runner < 4 ? console.log(`With ${lap} laps to go, the runner is feeling good`) : runner <= 9 ? console.log(`With ${lap} laps to go, the runner is really sweating now.`) : runner === 10 ? console.log(`The runner has gone ${runner} laps and is ready for some water.`) : console.log(`Do you even jog?`);
};

//!DO... WHILE LOOP

//? A Do/While Loop works in very much the same fashion but is formated to run the statement first.

do {
    statement
} while (condition);


let buildString = '';
let x = 0;

do {
    x = x + 1;
    buildString = buildString + x;
} while (x < 10)

console.log(buildString);

