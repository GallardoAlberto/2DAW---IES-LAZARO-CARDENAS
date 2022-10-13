class empleado{
    constructor(identificador, nombre) {
        this.identificador = identificador;
        this.nombre = nombre;
    }
}

console.log(empleado.prototype);
// let sueldoNeto = 0;
// let empleado = {
//     identificador : Number(prompt("Número de identificador: ")),
//     nombre : String(prompt("Nombre empleado:")),
//     sueldoBruto : Number(prompt("Sueldo Bruto: ")),
//     retencion : Number(prompt("Número en porcentaje de la retención")),
//     calcularNeto: () =>{
//         sueldoNeto = sueldoBruto - sueldoBruto * retencion /100;
//     }
// }