let array = [];


for(let i=0; i<6; i++){

let newNumber = prompt("inserisci il numero");
for(;;){
    if(isNaN(newNumber) || newNumber == "" || newNumber==" "){       
    newNumber = prompt("inserisci il NUMERO!");
} else {
break;
}
}

array.push(newNumber);
}

// stampare l'array nel console;
console.log(array);