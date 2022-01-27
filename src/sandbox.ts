const ancor = document.querySelector('a')!
// console.log(ancor);


// if(ancor)
//     console.log(ancor);

const form = document.querySelector('form') as HTMLFormElement
// console.log(form?.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement
// console.log(type);

const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit',(e:Event) => {
    e.preventDefault()
    console.log(type.value,tofrom.value,details.value,amount.valueAsNumber);
})