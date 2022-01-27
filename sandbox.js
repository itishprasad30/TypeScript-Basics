var charecter = 'superBowl';
console.log(charecter);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var anothervalue = 'The weeknd';
anothervalue = 'abel tesfaye';
// anothervalue = 12   its will give error
console.log(anothervalue);
// arrow function 
var circle = function (diameter) {
    return Math.floor(diameter * Math.PI);
};
console.log(circle(5));
//arrays and objects
var names = ['abel', 'taylor', 'dua'];
names.push('ed shreen');
// names.push(12) its will show error 
names[0] = 'the weeknd';
// names[0] = 23
console.log(names);
var numbers = [2, 34, 56, 7, 9];
numbers.push(233);
// numbers.push('some') its will show error
console.log(numbers);
var mixed = [23, 'some', true];
mixed.push('add');
mixed.push(111);
mixed.push(false);
console.log(mixed);
var person = {
    name: 'pintu sahoo',
    age: 22,
    single: true
};
person.single = true;
console.log(person);
// explicit types
var char;
var age;
var type;
// age = 'some'
age = 12;
// array
var ninja = ['nim', 'vbal'];
ninja.push('hello');
console.log(ninja);
//union mixed
var mixedVal;
mixedVal = ['some', 12, 'false', 433];
// Object
var newObj;
newObj = {
    name: 'The Weeknd',
    age: 32
};
console.log(newObj);
// type any
var age2 = 23;
age2 = 'somenew Age';
console.log(age2);
var abel;
abel = { name: 'the weeknd', age: 30 };
console.log(abel);
abel = { name: 20, age: 'the weeknd' };
console.log(abel);
