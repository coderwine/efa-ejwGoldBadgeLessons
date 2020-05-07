//! ARROW FUNCTIONS

/*
    Arrow functions are expressional functions that can be simplified into one of two forms, Concise and Block Body.  The main goal is to generate shorter syntax for writing a function.
? Consider how we use ternaries and how they can simplify if/else statements.  This is very similar.

    Arrow Functions also do NOT get hoisted.
*/

//Regular Function

function regFunc() {
    console.log('just a regular function')
};
regFunc();

//     (1)     (2) (3)    (4)
let arrowFunc = ()  => console.log('arrow in one line');
arrowFunc();  // We still need to invoke our function

/*
    1: A variable was created to hold the value of our anonymous arrow function.
        - Arrow functions are ALWAYS anonymous.
    2: Parameters are still capable of being injected.
        - If we only have one parameter, we technically don't need the parans () BUT if we are not passing any parameters, it is required to denote ()
    3: "How we see an arrow", this syntax tells JS that we are about to process a function.
    4: Within our format, JS assumes the return statement.
*/

let clearArrow = x => console.log(x);
clearArrow(10);

//! CONCISE vs BLOCK BODY 

//!Concise:
// When we have a simply return, or response, from our arrow function, it makes sense to write it in a conscise, simplified, way.  The return statement is assumed.

let consciseBody = (x,y) => console.log(x + y);
consciseBody(1,2);
//? Here is a single line of code that returns a value we were quickly seeking.  Of course, we can build upon this as well.

let slightlyComplexConscise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them.`);
slightlyComplexConscise(3,1);
slightlyComplexConscise(1,5);
//? The above code is a little bit complex as we are passing a bit more information but still returning a simple statement.  It is all still one line of code that we have written.

//!Block:
// The 'return' keyword IS required.  We also inlcude the curly braces.
//? Sometimes it makes sense to write our code in a block body as we inject multiple aspects of code.  

let blockArrow = (x,y) => {
    return `${x} are within a ${y}`;
}

console.log(blockArrow('We', 'Block Body'));

//? The same rules regarding parameters still apply.
let sampleBlock = x => {
    console.log(x)
}

sampleBlock(99);


//*CHALLENGE
//* Write the below function as a concise pass the variables as listed:

let hero = 'Robin Hood';
let nock = 1;

// function shot(x,y) {
//     y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);
// };

// shot(hero,nock);

//* Using a concise body, provide the same results as the declared function above.

// let shot = (x,y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);

// shot(hero,nock);

//* Using a Block Body, pass the same variables but increase the number of shots until the second console log is returned.

let shoot = (x,y) => {

    for(i=y; i<=3; i++ ){
        y = i
        console.log(`${x} shoots arrow number ${y}...`)
    }

    if(y < 3) {
        console.log(`${x} only shot ${y} arrow...`);
    } else {
        console.log(`${x} shot ${y} arrows at the target!`)
    }
    
}

shoot(hero,nock);