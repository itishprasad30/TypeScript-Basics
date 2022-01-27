"use strict";
const ancor = document.querySelector('a');
// console.log(ancor);
// if(ancor)
//     console.log(ancor);
const form = document.querySelector('form');
// console.log(form?.children);
//inputs
const type = document.querySelector('#type');
// console.log(type);
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
