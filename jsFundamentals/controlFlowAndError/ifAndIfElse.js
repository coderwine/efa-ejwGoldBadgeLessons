//! IF CONDITIONALS

//? When utiling comparison operators, we typically are asking so that we can move on to the next "batch" of code.  "If" something is true, do "this thing".

let light = 'on';

if(light == 'on') {
    console.log('The light is on');
}

let weather = 65;

if(weather < 70) {
    console.log('Consider wearing a jacket');
}

//? Understanding how our comparison operators are functioning can help us ask questions to produce results we are wanting.  If the weather is less than 70 degress outside, we may want to be instructed to wear a jacket.

//? *What if we wanted to make sure two things were true inside our if statement?

let rain = true;

if(weather < 70 && rain != false) {
    console.log('It is a little chilly and will possibly rain.');
}

//! IF ELSE 
//? Perhaps we want to evaluate a question and provide an option for either the "yes" and "no" of that answer.  EX: "If your are tired, sleep.  If not, go for a walk."  If/Else statements allow us this ability to write out a chain of events.

let today = 75;   

if (today < 70) {
    console.log(`It's ${today}, wear a jacket!`);
} else {
    console.log(`It's ${today}.  No jacket needed.`);
};

//? What if there are multiple things you would like to check against and compare to?
//! ELSE IF
// This is a condition that would be checked if the above condition was not met.

let cookTime = 40;

if(cookTime === 45) {
    console.log(`Let us feast!`);
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes.  Wait another 5 - 15 minutes.`)
} else if(cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes.  Wait another 10 - 25 minutes.`)
} else {
    console.log(`It has only been ${cookTime} minutes.  Perhaps at least try cooking it...`)
};

// The end of the ELSE IF statement should has a simple "else" to finish it.  This is simply stating that non of our considtions were met to execute and we should provide a response to those responses we can't account for.

//?  It should also be considered that it will finish the method once the condition has been met.  Remember, JS reads from top to bottom.  If it passes on a particular Else If, it will consider it completed.
//? *what if we swapped the 20 and 30 conditions?


let cookTime2 = 40;

if(cookTime2 === 45) {
    console.log(`Let us feast!`);
} else if(cookTime2 >= 20) {
    console.log(`It has only been ${cookTime2} minutes.  Wait another 10 - 25 minutes.`)
} else if(cookTime2 >= 30) {
    console.log(`It has only been ${cookTime2} minutes.  Wait about 5 - 15 minutes.`)
} else {
    console.log(`It has only been ${cookTime2} minutes.  Perhaps at least try cooking it...`)
};

//?  We can see that although the first statement is true, we actually want it to read the second statement.  This would provide us the wrong information and because that first else/if is true, JS no longer need to finish reading the rest of the else/if statement. 

//Another Example:
let age = 30;

if(age >= 25){
    console.log('yay! You can rent a car');
} else if(age >= 21){
    console.log('yay! You can drink');
} else if(age >= 18){
    console.log('yay! you can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun!')
}
