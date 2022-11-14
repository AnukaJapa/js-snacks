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


} else { //quindi se hai inserito parola non ci serve chidere di più
    break;
}



        
    

 
    

}
