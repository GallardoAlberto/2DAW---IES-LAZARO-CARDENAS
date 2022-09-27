// Crea una aplicación web que dibuje un triángulo.
//     • Se pide al usuario un número positivo (Validar el número).
//     • La aplicación escribirá un triángulo a base de asteriscos. 
//     • Será un triángulo rectángulo isósceles cuyos catetos tendrán el mismo número de asteriscos.
//     • Usaremos para escribir los asteriscos, el tipo de letra monospace.

let numero = Number(prompt("Número positivo: "));

do {
    alert("Número no valido, introduce otro por favor.");
    let numero = Number(prompt("Número positivo: "));
} while (numero < 0);

