// functions

const greetings = ()  => {
    console.log('Dawn Fm'); 
}

greetings()

const add =(a:number,b:number,c?:number| string) => {
    console.log(a +b);
    console.log( c);
} 

add(23,11,'some')