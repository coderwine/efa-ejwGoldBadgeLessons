let colors = ['red','orange','coral','yellow','green','teal','blue','indigo','violet','black'];
// let suffix = ['st','nd','rd','th','th','th','th','th','th','th']
let suffix = ['st','nd','rd','th'];

let placement = (colors, end) => {
    for(let i = 0; i < colors.length; i++) {
        
        // console.log(`${colors[i]} is ${i+1}${end[i]}.`); //full suffix array
        
        console.log(`${colors[i]} is ${i + 1}${i >= 3 ? end[3] : end[i]}.`)
    }
};

placement(colors, suffix);

//Changed this
let x = 1;
