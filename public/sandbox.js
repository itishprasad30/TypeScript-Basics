"use strict";
const charecter = 'superBowl';
console.log(charecter);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
let anothervalue = 'The weeknd';
anothervalue = 'abel tesfaye';
// anothervalue = 12   its will give error
console.log(anothervalue);
// arrow function 
const circle = (diameter) => {
    return Math.floor(diameter * Math.PI);
};
console.log(circle(5));
//arrays and objects
let names = ['abel', 'taylor', 'dua'];
names.push('ed shreen');
// names.push(12) its will show error 
names[0] = 'the weeknd';
// names[0] = 23
console.log(names);
let numbers = [2, 34, 56, 7, 9];
numbers.push(233);
// numbers.push('some') its will show error
console.log(numbers);
let mixed = [23, 'some', true];
mixed.push('add');
mixed.push(111);
mixed.push(false);
console.log(mixed);
let person = {
    name: 'pintu sahoo',
    age: 22,
    single: true
};
person.single = true;
console.log(person);
// explicit types
let char;
let age;
let type;
// age = 'some'
age = 12;
// array
let ninja = ['nim', 'vbal'];
ninja.push('hello');
console.log(ninja);
//union mixed
let mixedVal;
mixedVal = ['some', 12, 'false', 433];
// Object
let newObj;
newObj = {
    name: 'The Weeknd',
    age: 32
};
console.log(newObj);
// type any
let age2 = 23;
age2 = 'somenew Age';
console.log(age2);
let abel;
abel = { name: 'the weeknd', age: 30 };
console.log(abel);
abel = { name: 20, age: 'the weeknd' };
console.log(abel);
