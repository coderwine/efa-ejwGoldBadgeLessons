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
