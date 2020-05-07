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
//! ARROW FUNCTIONS
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