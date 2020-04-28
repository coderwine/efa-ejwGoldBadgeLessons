//! Assignment Operators

// These assign a value from the left to the right side of an operator.

// the "=" is the simplist for of an assignment operator.

let x = 1;  // X is assigned to the the value of 1.

//?  There are short hands that we can also accomplish with assignment operators as well.

// Addition
x = x + 1;
x += 1; // this is a short hand of what is being declared above. 
//? What should we expect if we were to console log x at this stage? 
console.log(x);

//?  These assignment operators are also functional in other mathmatical aspects.

// Subtraction
x -= 1; // x - 1
console.log(x);

// Multiplication

x *= 4;  // x * 2
console.log(x);

// Division
x /= 2; // x / 2
console.log(x);

// Modulus (a remainder of)
x %= 3;
console.log(x);  // in this case, because the division operator above gives us a result of 4, dividing that up by 3 shows us a remainder of 1, thus the result of 1.

// Exponential
y = 10
y **= 2;  // 10 * 10 or 10 to the 2nd power.
console.log(y);

//? Please note that these are not the ONLY operators available to us but rather the more common ones.  I have a link (in my notes file) to the MDN docs that lists out all sorts of different operators.  I would highly suggest looking these over whenever you get the chance.  At this point, these are good launching points in understanding what assignment operators are capable of doing for us.

