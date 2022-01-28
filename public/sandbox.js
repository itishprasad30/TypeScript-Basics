"use strict";
class Invoice {
    // there are three access modifires in the 
    //1 public
    // 2. private
    // 3. readonly
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    formart() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
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
