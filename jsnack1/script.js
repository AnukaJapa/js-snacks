
 let firstNumber = prompt("inserisci il primo numero");
 let secondNumber;


for(;;){
//verificare se il primo numero inserito è il numero e solo dopo verifica passa a richiedere il secondo numero
if(isNaN(firstNumber) || firstNumber == "" || firstNumber == " "){
    console.log("il numero inserito non è numero prova ancora");
    firstNumber = prompt("inserisci il primo NUMERO");
} else {
    secondNumber = prompt("inserisci il secondo numero");
    
    for(;;) {
        if(isNaN(secondNumber) || secondNumber == "" || firstNumber == " "){
            console.log("il numero inserito non è numero prova ancora");
            secondNumber = prompt("inserisci il secondo NUMERO");
        } else {
          break;
        } 
    }
    break;
} 
}

//verificare se l'utente ha inserito numeri uguali dire che sono uguali se diversi rispondi con il massimo numero
if(firstNumber != secondNumber){
    let maxNumber = Math.max(firstNumber,secondNumber);
    console.log(`Questo è il massimo numero da te inserito: ${maxNumber}`);
} else {
    console.log("i numeri tu hai inserito sono uguali");
}










