for (i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
      console.log('Fizz Buzz');
  } else if (i % 5 === 0) {
      console.log('Buzz');
  } else if (i % 3 === 0) {
      console.log('Fizz');
  } else {
      console.log(i);
  }
}

for (i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
      console.log('Fizz Buzz');
  } else if (i % 3 === 0) {
      console.log('Buzz');
  } else if (i % 5 === 0) {
      console.log('Fizz');
  } else {
      console.log(i);
  }
}

let greeting = (fName, lName) => console.log(fName + lName);
greeting('Eric', 'Winebrenner');

for(let i = 0; i <= 100; i++) {
    (i % 3 === 0 && i % 5 === 0) ? console.log('Fizz Buzz') : 
    (i % 3 === 0) ? console.log('Fizz') :
    (i % 5 === 0) ? console.log('Buzz') :
    console.log(i);
}

function x(a,b,c) {
    (a**2 + b**2) === c**2 ? console.log(true) : console.log(false);
}

x(3,4,5);

let fname = 'some';
let lname = 'thing';

function fullName (fname,lname) {
    console.log(fname, lname);
}

fullName(fname, lname);


for(let fb=0; fb < 101; fb++){

    switch(true){
        case (fb % 3 === 0 && fb % 5 ===0),
        console.log('Fizz Buzz'):
        break
        case (fb % 3 === 0),
        console.log('Fizz'):
        break
        case (fb % 5 ===0),
        console.log('Buzz'):
        break
        default:
            console.log(fb)
    }
}

function yName (fName, lName) {
    let wholeName = fName + lName;
}
console.log(wholeName);
fullName('me','also');

for(let i = 0; i <= 100; i++) {
    let fizz = (i % 3 === 0);
    let buzz = (i % 5 === 0);

    if(fizz && buzz) {
        console.log('FB');
    } else if(fizz) {
        console.log('F')
    } else if(buzz) {
        console.log('B')
    } else {
        console.log(i)
    }
}

for(let i = 1; i < 101; i++) {
    let out = `${ i % 3 == 0 ?'fizz': '' }${ i % 5 == 0 ? 'Buzz' : '' }`;
        console.log( out != '' ? out : i  );
    }

    [...Array(100).keys()].map((FB) => {
        let out = `${ FB % 3 === 0 ? 'F':'' } ${ FB % 5 === 0 ? 'B':'' }`;
        console.log( out == '' ? FB : out );
    });
    
    function isRight(b,s,h) {
        console.log((b**2 + s**2) === h**2);
    }

    isRight(3,4,5);
    isRight(5,6,7);


    let FizzB = '';
    for(let fb = 0; fb <= 100; fb++) {

        if(fb % 3 == 0) {
            FizzB = FizzB + 'Fizz';
        }

        if(fb % 5 == 0) {
            FizzB = FizzB + 'Buzz';
        }

        if(FizzB == '') {
            console.log(fb)
        } else {
            console.log(FizzB)
        };

        FizzB = '';
    }
  
    