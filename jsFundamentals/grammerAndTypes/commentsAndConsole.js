// COMMENTS

/*
    How Do we make a comment in JavaScript?
        - Comments can either be noted in a Single-Line or Multi-Line syntax.  This looks like this:
*/

    //  SINGLE LINE

    /*
        MULTI-LINE
    */

/*
    What do comments in our code do for us?
        - We primarily use comments in our code to make note of a process we are attempting to complete.  This could be something we plan to build, what we intended a process or function to do, or simply give us quick reference points in our code so we can locate something later on.
        
        - Comments help us communicate not only with others who may be looking over our code to quickly understand what we intend, but also to help FUTURE YOU to understand what you intended when you were writing your code.
        
        - There are also many different Extensions that you can find in VSCode that can help with your comments (as with many other things).  A couple I like are "Comment Anchors" and "Better Comments".

        NOTE:  By the end of this course, you WILL look at your past projects and wonder what you were thinking.  It will be a fun activity later on.  Think of it like a childhood drawing...

*/

//* Moving forward, I will use "Better Comments" to highlight some contents.

//! THE CONSOLE

/*
    ? What is the console used for?
     - This will be the main source how where we will debug our code.
     - We can place messages within it to help us "walk" through our code.
 */

//  Example 1:  Setting a Message
let name = 'Your Name Here';
console.log(name);

// Example 2:  Walking through a process
let num = 10;
console.log(num);
num--;
console.log(num);
num--;
console.log(num);
num++;
console.log(num);

// NOTE: https://developer.mozilla.org/en-US/docs/Web/API/Console/log

//*CHALLENGE
//* For the below statements, use a single line comment and a multiline comment to separate these so they don't break our code.  Console log the results.
//! UNCOMMENT THIS OUT PRIOR TO GIVING THIS CHALLENGE!!!!!
//? Perhaps make this a Kahoots question
//? The x variable is provided

// This is a simple comment.
let x = 1; 


/*
    Here is a list of ideas for the x variable:
        1.  Perhaps it should be 10.
        2.  Increase by 1
        3.  Some other information

*/

console.log(x);