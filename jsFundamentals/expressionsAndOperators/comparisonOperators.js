//! COMPARISON OPERATORS

// These are to help us answer a simple yes or not question.  Are these what I expect?  Comparison Operators allow us to run a process to quickly evaluate a boolean value and move on from there.

// EQUALITY COMPARISON

// is x "equal to" y?
console.log('3' == 3);
// this returns a value of True because pulls in the string, evaluates and recognizes that '3' is similar to the number 3.
console.log(3 == 3);
// Understanding the above statement, we could assume that the number 3 would be "equal to" the number 3.
console.log('4' == 3);
// JS understands that the string of "4" doesn't compare with the number 3 and returns a FALSE value.

// STRICT EQUALITY COMPARISON

console.log('Number to Number: ', 3 === 3);
console.log('String Number to Number: ','3' === 3);
console.log('Exact String: ','John' === 'John');
console.log('Similar String: ','john' === 'John');
console.log('Not Exact String: ','Jane' === 'John');
//? Strict means that it is exactly the same thing.  The way it helped me to remember this syntax was the phrasing itself:  "Strictly Equal to" (===) vs "Equal to" (==).  
/*
    '3' equal to 3;
    '3'  =    =  3;

    '3' strictly equal to 3;
    '3'    =       =    = 3;
*/

//?  When comparing two values, its important to know that having a loose equality can result is some misrepresentation of desired results.  If you need to have an exact value answered, it is suggested to utilize the 'Strict Equality Comparision'.

// NOT EQUAL
console.log('3' != 4);  // return true
console.log('3' != 3);  // returns false

//? Consider our question that we are asking:  Is '3' NOT equal to 3?  That would be no as the equal comparison is capable of understanding the number within the string is similar to the number itself, sees that it is the same and gives us a result of "false" because it isn't "true" that these two things are NOT equal.

// STRICTLY NOT EQUAL

//?  This can be applied to the same strict concepts as before
console.log('3' !== 3);
console.log(3 !== 3);

// Greater Than
console.log(2 > 2);  // false
console.log(3 > 2);  // true

// Less Than
console.log(2 < 2);  // false
console.log(3 < 2);  // false
console.log(1 < 2);  // true

// Greater Than or Equal to
console.log(2 >= 2);  // true
console.log(3 >= 2);  // true

// Less Than or Equal to
console.log(2 <= 2);  // true
console.log(3 <= 2);  // false
console.log(1 <= 2);  // true

// AND Operator
// This evaluates two questions and answers TRUE as long as both questions are TRUE. 

console.log(1<2 && 2>1);  // Because both are TRUE, it returns TRUE;
console.log(1<2 && 2>3);  // Because only 1 is TRUE, it returns FALSE;
console.log(2<1 && 2>1);  // If the First question results in a FALSE, it doesn't even consider the second question and simply returns a false.
//?  Consider a site where a store allow users to log in and shop their supply.  We want to be sure that we are looking for an email AND password from the user.  If these values are not included, do NOT let them log in.

// OR Operator
// As long as one of the values is true, it will return a TRUE value.  
//?  Consider the same store site:  They may allow a user to login using either their email or username as a means of identifying themselves.  If the user fills out their username and password, allow access OR if they fill out using their email and password, let them in; otherwise, REJECT.

console.log('bob' === 'bob' || 'Bob' === 'Bob');  // returns TRUE
console.log('bob' === 'john' || 'Bob' === 'Bob');  // returns TRUE
console.log('bob' === 'bob' || 'Bob' === 'john');  // returns TRUE
console.log('bob' === 'john' || 'Bob' === 'john');  // returns FALSE


//* Challenge
/*
* Create multiple console logs

*   '10' should equal 10 - result TRUE
*   '10' should not equal 10 - result TRUE
*   Have 10 greater than to 1-9 AND less than to 11-20 - results TRUE
*   Have 'Pete' strictly equal to 'Bruce' OR 'Bruce' strictly equal to 'Bruce' - result TRUE
*/

console.log('10' == 10);
console.log('10' !== 10);
console.log(10>8 && 10<11);
console.log('Pete' === 'Bruce' || 'Bruce' === 'Bruce');
