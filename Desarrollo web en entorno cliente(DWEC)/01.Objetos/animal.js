let nombreInt = prompt("Introduce nombre");
let pesoInt = prompt("Introduce peso: ");
let animal = new Object();
animal.ingesta = 0;
animal.nombre = nombreInt;
animal.peso = pesoInt;

animal.calculo = function(){
    return this.ingesta = 50 * this.peso;
}

console.log(animal.calculo());