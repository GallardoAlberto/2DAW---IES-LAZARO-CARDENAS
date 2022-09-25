let numRandom = Math.round(Math.random()*10);
let num = 0;

do {
    num = Number(prompt("Introduce un número del 1 al 10"));
    if (num > numRandom) {
        alert("Te has pasado");
    }
    if (num < numRandom) {
        alert("Te has quedado corto");
    }
    if ( num === numRandom){
        alert("Has acertado!")
    }
} while (num != numRandom);
