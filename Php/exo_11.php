<?php

$premier_nombre;
$deuxieme_nombre;

$premier_nombre = readline("Veuillez saisir le premier nombre : ");
$deuxieme_nombre = readline("Veuillez saisire le deuxième nombre : ");

if ($premier_nombre > 0 && $deuxieme_nombre > 0 or $premier_nombre < 0 && $deuxieme_nombre < 0) {
echo("Nombre positif"); 
}
else if ($premier_nombre == 0 or $deuxieme_nombre == 0) {
echo("Nombre nul");
}
else {
echo("Nombre négatif");
}

?>