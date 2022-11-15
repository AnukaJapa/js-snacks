//Fate generare un numero random da 0 a 10 al computer e chiedete all'utente di inserire un suo numero. se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. 
//BONUS: al posto di giocare con numeri da 0 a 10, prima di giocare chiedete all'utente il numero massimo consentito (n) e fate estrarre a caso un numero da 0 a n, il resto ramane invariato. In generale infine se volete (sanificare l'input/ controllarlo)
//Controllate input particolari, ossia dove è richiesto un numero, che sia a tutti gli effetti un numero, ecc ecc



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
    }else if(userName > random){
        console.log("il tuo numero scelto dovrà essere nel range del random generato");
        userNumber =prompt("il tuo numero scelto deve essere nel range del random generato");
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
