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