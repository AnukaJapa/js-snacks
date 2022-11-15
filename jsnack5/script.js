//Crea un array vuoto. 
//Chiedi per 6 volte all'utente di inserire un umero. se è dispari inseriscilo nell'array. Stampa l'array alla fine

//BONUS: Al posto di stampare solo i numeri dispari, stampate anche i pari, ma suddivisi! Ossia prima dico che stampo tutti i numeri pari e poi stampo anche tutti i numeri dispari!

//Controllate input particolari, ossia dove è richiesto un numero, che sia a tutti gli effetti un numero, ecc ecc


let arrayDispari = [];
let arrayPari = [];


for(let i=0; i<6; i++){

let newNumber = prompt("inserisci il numero");
//verificare se quello inserito è il numero
for(;;){
    if(isNaN(newNumber) || newNumber == "" || newNumber==" "){       
    newNumber = prompt("inserisci il NUMERO!");
} else {
break;
}
}
//verifica se il numero è dispari e se è inseriscilo nell'array
if(newNumber%2!=0){
    arrayDispari.push(newNumber);
}else {
    arrayPari.push(newNumber);
}
}

// stampare l'array nel console;
console.log(arrayDispari);
console.log(arrayPari);