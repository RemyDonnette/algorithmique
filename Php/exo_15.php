<?php

$nb_photocopies;
$palier1 = 10;
$palier2 = 20;
$prix_palier1 = 0.10;
$prix_palier2= 0.09;
$prix_palier3= 0.08;
$total;

$nb_photocopie = readline("Veuillez saisir le nombre de photocopies : ");

if ($nb_photocopie <= 10) {
	$total = $nb_photocopie*$prix_palier1;
    echo
    ("Votre facture est de : 
    - $nb_photocopie photocopies à $prix_palier1 centimes
    Total : $total euros");
}

if ($nb_photocopie > 10 && $nb_photocopie <= 30) {
    $nb_photocopie = $nb_photocopie - $palier1;
    $total = $palier1*$prix_palier1 + $nb_photocopie*$prix_palier2;
    echo
    ("Votre facture est de : 
    - $palier1 photocopies à $prix_palier1 centimes
    - $nb_photocopie photocopies à $prix_palier2 centimes
    Total : $total euros");
}

if ($nb_photocopie > 30) {
    $nb_photocopie = $nb_photocopie - $palier1 - $palier2;
    $total = $palier1*$prix_palier1 + $palier2*$prix_palier2 + $nb_photocopie*$prix_palier3;
    echo
    ("Votre facture est de :
    - $palier1 photocopies à $prix_palier1 centimes
    - $palier2 photocopies à $prix_palier2 centimes
    - $nb_photocopie photocopies à $prix_palier3 centimes
    Total : $total euros");
}