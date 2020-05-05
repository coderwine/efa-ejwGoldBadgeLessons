//NOTE

//! IF statement
//*CHALLENGE
/* 
* Create two variables each with a value of:
*    1) 'is the night'
*    2) true

* Create an if statement that returns true and console log 'Batman'
*/ 

let batman = 'is the night';
let bruce = true;

if(batman == 'is the night' && bruce === true){
    console.log('BATMAN!');
}


//!--------------------------------------------------------------------------------------------------

//NOTE

//! IF ELSE statements
//* CHALLENGE
/*
* Create a variable named "vader" and give it a string value of 1 of the three values:
*   1) 'Luke, your father I am'
*   2) 'No, I am your father.'
*   3) 'Luke, I am your father.'

* Create an if else statement that passes through these three values and console logs either True or False.  
*/

let vader = 'No, I am your father.';
let luke = 'NOOOOOOO!'  //? for my own fun - not including in the challenge

if(vader === 'Luke, I am your father') {
    console.log(false);
    console.log('Misquoted');
} else if(vader === 'Luke, your father I am.') {
    console.log(false);
    console.log('Misquoted you are.');
} else if(vader === 'No, I am your father.'){
    console.log(true)
    console.log(`Luke screams, '${luke}'`)
} else {
    console.log(false)
}

//!--------------------------------------------------------------------------------------------------

//NOTE

//! SWITCH statements

//* CHALLENGE
//* Create a 'grade' variable that holds a string value of 'A,B,C,D or F.
//* Create a switch statement that passes that variable to check.  Depending on the grade, console log a string result that indicates what they need (ex: A = 'Passed!', F = 'Failing', etc.).   

let grade = 'B';

switch (grade) {
    case 'A':
        console.log('Passed!')
        break;
    case 'B':
        console.log('Almost there!')
        break;
    case 'C':
        console.log('Could use a little more study time.')
        break;
    case 'D':
        console.log('Time to put in some extra work.')
        break;
    case 'F':
        console.log('Failing...')
        break;
    default:
        console.log('Grades should be A,B,C,D, or F.')
};


//*Challenge 2:
//*  Create a similar switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.

/*
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 78;

switch(true) {
    case grade > 89:
        console.log('Passing with an A!')
        break;
    case grade > 79:
        console.log('Passing with a B!')
        break;
    case grade > 66:
        console.log('Passing with a C!')
        break;
    case grade > 59:
        console.log('Passing with a D!')
        break;
    case grade < 59:
        console.log('With a F, you are failing...')
        break;
    default:
        console.log('Please insert a value...')
};

//!--------------------------------------------------------------------------------------------------

//NOTE

//! TERNARIES

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

