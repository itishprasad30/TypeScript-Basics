export  class Invoice {
   // there are three access modifires in the 
   //1 public
   // 2. private
   // 3. readonly

    constructor(readonly client:string,public details:string,private amount:number,){
    }

    formart(){
        return `${this.client} owns $ ${this.amount} for ${this.details}`
    }
} 