//! TERNARIES

// This is a quick way of considering an if/else statement.  We are capable of writing out our considitional is a much more simple manner.

//?  We can consider an if/else:
let name = 'Eric';

if(name === 'Eric') {
    console.log(`Hi, ${name}!`);
} else {
    console.log(`Not sure I know ${name}`)
}

//? Writing a ternary requires us to define our condition - "IF" that returns true, provide a result - "ELSE" return a result.

//condition ? if true : else result

name === 'Eric' ? console.log(`Hi, ${name}! We're using a ternary!`) : console.log(`Not sure I know ${name}...`);

//?  We can break this apart if it helps us:

name === 'Eric' ? 
    console.log(`Hi, ${name}! We're using a ternary!`) : 
    console.log(`Not sure I know ${name}...`);

//? It's even possible to chain our if/else 

let hero = 'Batman';
let villian = 'Mr. Freeze';

hero == 'Batman' && villian == 'Riddler' ? console.log('What has a head and Tail but no body?') : hero == 'Batman' && villian == 'Joker' ? console.log('Why so serious?') : hero == 'Batman' && villian == "Mr. Freeze" ? console.log('Ice to meet you!') : console.log(`${hero} is the night!`);

//? This looks like a big block of code but we have minimized much of our writing into (technically) 1 line of code!

//* CHALLENGE
/*
* Create a variable named "vader" and give it a string value of 1 of the three values:
*   1) 'Luke, your father I am'
*   2) 'No, I am your father.'
*   3) 'Luke, I am your father.'

* Create an ternary that passes through these three values and console logs either True or False. 

* **What's an easier way to write this if we know one answer is correct?
*/

let vader = 'No, I am your father.';

vader === 'Luke, I am your father' ? console.log(false) : vader === 'Luke, your father I am.' ? console.log(false) : vader === 'No, I am your father.' ? console.log(true) : console.log(false);

//OR

vader === 'No, I am your father.' ? console.log(true) : console.log(false);


