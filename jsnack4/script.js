//IN un array sono contenuti i momi degli invitati alla festa del greande Gatsby, chiedi all'utente il suo nome e comunicargli se può partecipare o no alla festa.

//Accettare stringhe con lettere maiuscole e minuscole a caso anche dove è consentito farlo.

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

