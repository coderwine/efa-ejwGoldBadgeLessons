//! LITERALS

// A literal is a value that we declare inside an array or object.  These can be primitive (string, number, boolean, etc) and complex types (such as arrays, objects functions).


//! Primitive 
//array examples
let array = ['first', 'second','third'];  // The elements within it are the literals of this array.  
//? Currently we have 3 elements and they are separated with commas.  We can also note the same value of elements like this:
let array2 = [1, , 3];  // We currently still have the same length within this array.  We have just declared that the second element is empty but still existing. 

//A literal starts with an index of 0 and counts up from there.
let exIndex = ['Index 0', 'Index 1', 'Index 2', 'Index 3'];
let valueIndex = ['spot 1', 'spot 2', 'spot 3']

console.log(`To see index 1 for exIndex array is ${exIndex[1]} & valueIndex array is ${valueIndex[1]}`);

console.log(array);  //Here we can see the array 
console.log(array.toString());  //utilizing the toString() callback method, we are able to see the values within that array

//object examples
let obj = {
    key: 'value'
};

console.log(obj);  //We see the object
console.log(obj.key);  // Using dot notation, we can drill into the value of a key.

let marvel = {
    one: 'Spider-Man',
    two: 'Hulk',
    three: 'Iron Man',
    four: 'Wolverine'
};

console.log(marvel.four);

//! Complex Literals 
// We are capable of storing a multitude of infomation within arrays and objects, including other arrays and objects.

//ex 1
let compArr = [1, 'string', true, [1,2,3], () => {console.log('inside an compArray')}];
console.log(compArr[4]);
console.log(compArr[3][1]);  //We can dig further into an array.

let compObj = {
    num: 1,
    bool: true,
    string: 'String',
    arr: [
        'info',
        'more info',
        7,
        false
    ],
    inObject: {
        num: 2,
        bool: true,
        string: 'more Strings'
    },
    func: function() {
        return 'function inside an object'
    }
};

console.log(compObj.func);
console.log(compObj.inObject.bool);

//? Why would we want to store complex information within an object?
//? Consider inventory:

let carlot = {
    cars = {
        make: ['Honda', 'Ford'],
        models: ['Civic', 'Accord', 'Pilot', 'Mustang', 'Taurus', 'F150'],
        years: [17,18,20],
        preOwned: true
    }
}