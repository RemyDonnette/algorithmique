<?php

$heure = 0;
$minute = 0; 
$resultat = 0;
$minus = "00";

$heure = readline("Veuillez saisir l'heure : ");
$minute = readline("Veuillez saisir les minutes : ");

if ($heure < 23) {
    if ($minute == 59) {
        $heure == $heure++;
        echo("Dans une minute il sera $heure:$minus");
    }
    else {
        $minute == $minute++;
        echo("Dans une minute il sera $heure:$minute");
    }
}

if ($heure == 23) { 
    if ($minute == 59) {
        echo("Dans une minute il sera $minus:$minus");
    }
    else {
        $minute == $minute++;
        echo("Dans une minute il sera $heure:$minute");
    }
}
