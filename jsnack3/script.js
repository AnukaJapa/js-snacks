//software chiede 10 volte inserimento di un numero
let arrayNumbers = [];

for(let i =0 ; i<10; i++){
let newNumber = prompt("inserisci il numero");

for(;;){
if(isNaN(newNumber) || newNumber == "" || newNumber == " "){
    console.log("non hai inserito il numbero prova ancora");
    newNumber = prompt("inserisci di nuovo il numero");
}else {
    break;
}

arrayNumbers.push(newNumber);
}
}








