let nombre = prompt("Nombre");
let apellidos = prompt("Apellidos");
let edad = Number(prompt("Edad"));
let salario = Number(prompt("Salario"));

if(salario > 2000){
    salario = salario;
}

if(salario >= 1000 && salario <= 2000){
    if(edad > 45){
        salario = salario * 1.03;
    }
    if(edad <= 45){
        salario = salario * 1.10;
    }
}

if(salario < 1000){
    if(edad < 30){
        salario = 1100;
    }
    if(edad <= 45 && edad >= 30){
        salario = salario * 1.03;
    }
    if(edad > 45){
        salario = salario * 1.15;
    }
}

alert(salario);