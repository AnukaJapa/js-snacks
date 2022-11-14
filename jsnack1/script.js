
 let firstNumber = prompt("inserisci il primo numero");
 let secondNumber;


for(let i = 0; i<2;){
//verificare se il primo numero inserito è il numero e solo dopo verifica passa a richiedere il secondo numero
if(isNaN(firstNumber) || firstNumber == ""){
    console.log("il numero inserito non è numero prova ancora");
    firstNumber = prompt("inserisci il primo NUMERO");
} else {
    secondNumber = prompt("inserisci il secondo numero");
    
    for(let j = 0; j<2;) {
        if(isNaN(secondNumber) || secondNumber == ""){
            console.log("il numero inserito non è numero prova ancora");
            secondNumber = prompt("inserisci il secondo NUMERO");
        } else {
            j=2; //break;
            i=2;
        } 
    }
} 
}

//verificare se l'utente ha inserito il numero uguale

if(firstNumber != secondNumber){
    let maxNumber = Math.max(firstNumber,secondNumber);
    console.log(`Questo è il massimo numero da te inserito: ${maxNumber}`);
} else {
    console.log("i numeri tu hai inserito sono uguali");
}








