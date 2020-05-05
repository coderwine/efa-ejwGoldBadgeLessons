//! SWITCH STATEMENT

//? Switch statements is another versioning of how we consider IF/Else statements.  We are asking a question and requiring a specific responses that is determined by our answer.

let instructor = 'Ing';

switch(instructor) {
    case 'Ing':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Adam':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Zach':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
    case 'Amanda':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`)
};
//? Once each case has been evaluated and we return a result, we need to note to "break" out from our switch statement, otherwise we would continue on through our statements and produce those results as well.

//ex:
switch(instructor) {
    case 'Ing':
        console.log(`${instructor} is a part of the Web Development Team`);
    case 'Josh':
        console.log(`Without a break, we now think ${instructor} is a part of the Software Development Team`);
    default:
        console.log(`Without a break, we now can't find what ${instructor} teaches.`)
};

//?  We must end all our switch statements with a default in the same way that we need to end our ElseIf statements on a "default" result.  Think of this as a "catch" to those conditions that we either haven't considered or don't want to consider.

//?  We can also simplify this down to check among a varity of cases to result in one response.

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${instructor} is a part of the Software Development Team`)
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`)
}

//? We can apply conditionals within our switch to be met as well

let switchConditional = true;

switch(switchConditional == 'string' || typeof switchConditional == 'boolean') {
    case true:
        console.log(`${switchConditional} is a string or boolean!`)
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean.`)
}

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



