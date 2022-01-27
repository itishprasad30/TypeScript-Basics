"use strict";
//  Funtions Signatures 
// example 
let greet;
greet = (name, greetings) => {
    console.log(`${name} says this ${greetings}`);
};
// example 2
let cal;
cal = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
const result = cal(44, 20, 'adasd');
console.log(result);
