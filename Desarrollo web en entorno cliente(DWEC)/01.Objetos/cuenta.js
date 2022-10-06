let cuenta = {
    numeroCuenta: Number(prompt("Número de cuenta: ")),
    nombreTitular: prompt("Nombre del títular: "),
    nacionalidad: prompt("Nacionalidad: "),
    dni: prompt("DNI: "),
    banco: prompt("Banco: "),
    swift: prompt("SWIFT: "),
    sucursal: prompt("Sucursal: "),
    saldo : 0
}

cuenta.datosTitular = function(){
    return `Títular: ${cuenta.nombreTitular} <br> DNI: ${cuenta.dni} <br> Nacionalidad: ${cuenta.nacionalidad}`;
}

cuenta.datosBanco = function(){
    return `<br> Banco: ${cuenta.banco} <br> Código SWIFT: ${cuenta.swift}`;
}

document.write(cuenta.datosTitular());
document.write(cuenta.datosBanco());
