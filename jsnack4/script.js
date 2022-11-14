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

