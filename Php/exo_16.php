<?php

$genre = "";
$age;

do {
    $genre = readline("Veuillez renseigner votre genre (m/f) : ");
} 
while (($genre != "m") || ($genre != "f"));

$age = readline("Veuillez renseigner votre age : ");

if ($genre = "m" && $age > 20) {
    echo("Vous êtes imposable");
    }
    else if ($genre = "f" && $age > 18 && $age < 35) {
    echo("Vous êtes imposable");
    }

else 
echo("Vous n'êtes pas imposable");