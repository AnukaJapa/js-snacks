let arrayInvited = ["ana japaridze", "loenardo dicaprio", "selena verdi"];

let userName = prompt("inserisci il tuo nome");

for(;;){
    if(userName=="" || userName == " "){
userName = prompt("non hai inserito nessun nome, prova ancora");
    }else {
        userName.toLocaleLowerCase();
        break;
    }
}

//capire se accesso è consentito

for(let i=0; i<arrayInvited.length; i++){
    if(arrayInvited[i]==userName) {
        console.log("l'accesso è consentito! sei autorizzato");
        break;
    }
}

