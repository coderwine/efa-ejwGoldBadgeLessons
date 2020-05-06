//NOTE
//! FUNCTION
//*CHALLENGE
/*
*   Create an array of users (5-6 people).
*   Pass the array within a function called 'listUsers' and, console log each user within the array.
*/

let users = ['Dan','Natalie','Dave','Tony','Anna','Zach'];

function listUsers(list){
    for(user of list){
        console.log(user);
    }
}

listUsers(users);

//____________________________________________________________________//

//* Add. CHALLENGE 
//* Using the same array, create a function expression and pass that array through it that outputs a console log of the first 2 names.

let buildList = function listUsersAgain(list){
    for(i=0; i < 2; i++) {
        console.log(list[i]);
    }
}

buildList(users);


//!--------------------------------------------------------------------------------------------------

//NOTE
//!