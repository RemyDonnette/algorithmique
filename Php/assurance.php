<?php

$age_conducteur;
$duree_permis;
$fidelite;
$nombre_accident;
$couleur = 0;

$age_conducteur = readline("Quel age avez vous ?");
$duree_permis = readline("Depuis combien de temps avez vous le permis ?");
$nombre_accident = readline("Combien avez vous eu d'accident ?");
$fidelite = readline("Depuis combien de temps êtes vous chez nous ?");

if ($age_conducteur > 24) {
    $couleur++;
}
if ($duree_permis > 1) {
    $couleur++;
}
if ($fidelite > 4) {
    $couleur++;
}

$couleur = $couleur - $nombre_accident;

if ($couleur < 0) {
echo("Assurance refusée");
}
if ($couleur == 0) {
echo("Tarif rouge");
}
if ($couleur == 1) {
echo("Tarif orange");
}
if ($couleur == 2) { 
echo("tarif vert");
}
if ($couleur == 3) {
echo("Tarif bleu");
}