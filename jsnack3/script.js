//software chiede 10 volte inserimento di un numero
let arrayNumbers = [];

for(let i =0; i<10; i++){    
let newNumber = prompt(`inserisci il numero`);
for(;;){
if(isNaN(newNumber) || newNumber == "" || newNumber == " "){
    console.log("non hai inserito il numbero prova ancora");
    newNumber = prompt("inserisci di nuovo il numero");
} else {
   newNumber = Number(newNumber);
   arrayNumbers.push(newNumber);
   break;
}
}
}
//fai la somma dei numeri
let sum = arrayNumbers.reduce((previous,next) => {
    return previous + next;
})
console.log(`la somma dei numeri da te inseriti è: ${sum}`);


//trovare il valore massimo
let maximumValue=0;
for(let i =0; i<arrayNumbers.length; i++){
    if(maximumValue<=arrayNumbers[i]){
    maximumValue=arrayNumbers[i];
    }
}

console.log(`il valore massimo tra questi numeri da te inseriti è ${
    maximumValue}`);

//trovare il valore minimo
let minimumValue = arrayNumbers[0];
for(let i =0; i<arrayNumbers.length; i++){
    if(arrayNumbers[i]<minimumValue){
        minimumValue = arrayNumbers[i]
    }
}
console.log(`il valore minimo tra questi numeri da te inseriti è ${
    minimumValue}`);

//capire il  media

let average = sum / arrayNumbers.length;
console.log(`la media di questi numeri da te inseriti è ${average}`);







