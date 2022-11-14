let numeroMassimo = prompt("determina il numero massimo fino a cui estrarre");
//verifica se il numero inserito è valido
for(;;){
    if(isNaN(numeroMassimo) || numeroMassimo=="" || numeroMassimo==" "){
        numeroMassimo = prompt("isnerisci il NUMERO!");
    }else{
break;
    }
}

let random = Math.floor(Math.random()*numeroMassimo);
let userNumber = prompt("inserisci il tuo numero");


//verificare se il numeor inserito è valido
for(;;){
    if(isNaN(userNumber) || userNumber=="" || userNumber==" "){
        userNumber = prompt("isnerisci il NUMERO!");
    }else{
break;
    }
}

//verificare se il numero di user è uguale con il numero random
if(random == userNumber){
    console.log(`numero random è ${random}; \n il tuo numero è: ${userNumber} \n quindi hai vinto!`);
}else {
    console.log(`numero random è ${random}; \n il tuo numero è: ${userNumber} \n quindi hai perso!`);
}
