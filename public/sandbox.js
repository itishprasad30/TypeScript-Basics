import { Invoice } from "./classes/Invoice.js";
const invoOne = new Invoice('Pintu', 'for website', 2333);
const invoTwo = new Invoice('Dua Lipa', '80s sound creation', 23);
let invoice = [];
invoice.push(invoOne);
invoice.push(invoTwo);
console.log(invoOne.formart());
invoice.forEach(element => {
    console.log(invoTwo.formart());
    console.log(element);
});
