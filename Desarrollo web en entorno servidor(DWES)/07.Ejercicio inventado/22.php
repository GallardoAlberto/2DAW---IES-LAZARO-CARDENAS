<?php

$nombre1 = $_POST["nombre1"];
$inicial1 = substr($nombre1, 0, 1);
$longitud1 = strlen($nombre1);

print $nombre1;
print '<br><br>';
print "La inicial del nombre 1 es: " . $inicial1;
print '<br>';
print "La cantidad de letras que tiene el nombre 1 son: " . $longitud1;

print '<br><br>';

$nombre2 = $_POST["nombre2"];
$inicial2 = substr($nombre2, 0, 1);
$longitud2 = strlen($nombre2);

print $nombre2;
print '<br><br>';
print "La inicial del nombre 2 es: " . $inicial2;
print '<br>';
print "La cantidad de letras que tiene el nombre 2 son: " . $longitud2;

print '<br><br>';

$mayor = strcmp($nombre1, $nombre2);

if($longitud1 > $longitud2){
    print $nombre1 . " tiene " . $mayor . " letras más que " . $nombre2;
}else if($longitud2 > $longitud1){
    print $nombre2 . " tiene " . $mayor . " letras más que " . $nombre2;
}else{
    print "Tienen el mismo número de letras.";
}
?>
