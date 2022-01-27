//  Funtions Signatures 

// example 
let greet : (a:string,b:string)=> void

greet = (name,greetings) => {
    console.log(`${name} says this ${greetings}`);
}


// example 2

let cal : (a:number,b:number,c:string) => number

cal = (numOne:number,numTwo:number,action:string)=> {
    if(action === 'add'){

     return    numOne+ numTwo
    }
    else {
        return numOne - numTwo
    }
}

const result = cal(44,20,'adasd')

console.log(result);



