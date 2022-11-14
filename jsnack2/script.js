let firstWord = prompt("inserisci la prima parola");
let secondWord;


    for(;;){
//se la lunghezza è nulla quindi NON hai inserito la prima parola        
if(firstWord.length == 0){
console.log("non hai inserito la prima parola");
//chiedi ancora di inserirlo e verifica se adesso è giusta
    firstWord = prompt("inserisci la prima parola");

    if(firstWord.length !=0){
console.log("hai inserito la prima parola");
secondWord = prompt("adesso inserisci la seconda parola");
for(;;){
            if(secondWord.length == 0) {
console.log("non hai inserito la seconda parola");
secondWord = prompt("inserisci la seconda parola")
            } else {
console.log("hai inserito anche la seconda parola");
break;
            }
        }   
    }


} else {

    //inserite entrambe le parole giustamente, adesso capire quale è più lunga e esci dal loop.

    if(firstWord.length > secondWord.length){
console.log("la prima parola è più lunga");
    } else if(firstWord.length < secondWord.length){
console.log("la seconda parola è più lunga");
    } else {
console.log("la lunghezza delle parole sono uguali");
    }

    break;
}

}
