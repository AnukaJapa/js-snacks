let random = Math.floor(Math.random()*10);
let userNumber = prompt("inserisci il tuo numero");

//verificare se il numeor inserito è valido
for(;;){
    if(isNaN(userNumber)|| userNumber=="" || userNumber==" "){
        userNumber = prompt("isnerisci il NUMERO!");
    }else{
break;
    }
}