num1 = prompt("Número 1");
num2 = prompt("Número 2");

if(num1 > num2){
    alert(`el mayor es ${num1}`);
}else if (num1 === num2) {
    alert("Son iguales");
}else{
    alert(`el mayor es ${num2}`);
}