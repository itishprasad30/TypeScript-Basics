export class Invoice {
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
