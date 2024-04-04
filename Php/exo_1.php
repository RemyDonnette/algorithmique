<?php

// VARIABLES
$annee = 0;
$date = 0;
$d = 0;

// SAISIE DES DONNEES
$annee = readline("Veuillez saisir votre année de naissance : ");
$date = 2024;

// CALCUL
$d = $date - $annee;

// AFFICHAGE
echo($d);