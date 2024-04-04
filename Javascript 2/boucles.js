// const nom = 'Rémy';
// const age = 33;
// const majeur = age >= 18;

// if (age >= 18) {
//   console.log('Majeur');
// } else if (age < 18) {
//   console.log('Mineur');
// } else {
//   console.log('Erreur');
// }

// if (majeur) {
//   console.log('Majeur');
// } else if (!majeur) {
//   console.log('Mineur');
// } else {
//   console.log('Erreur');
// }

// // Ternaire
// // newvariable = variable ? true : false
// const result = majeur ? 'Majeur' : 'Mineur';
// console.log(result);


// // Interpolation
// const result2 = `Bonjour vous êtes ${majeur ? 'Majeur' : 'Mineur'}`;
// console.log(result2);

// // Trycatch
// try {
//   const isVerified = false;
//   if (isVerified) {
//     console.log('ok')
//   } else {
//     throw new Error("isVerified est faux")
//   }
// } catch (error) {
//   console.log(error.message);
// }

// // Tableaux
// const tab = [];

// // ajoute une valeur à la fin
// tab.push ('test', nom, age);

// // retire une valeur à la fin
// tab.pop ();

// // crée un nouveau tableau en déstructurant l'ancien
// const newTab = [...tab, 'nouveau'];

// // concatène les deux tableaux précédents
// const newTab2 = tab.concat(newTab);

// // split la variable et met chaque caractère dans un tableau
// const tabSplit = nom.split('');

// console.log(tab);
// console.log(newTab);
// console.log(newTab2);
// console.log(tabSplit);
// console.log(`Le tableau ${tab ? n}`)

// Boucles
// const motATrouver = prompt('Veuillez saisir un mot : ');
// for (let i = 0; i < newTab2.length; i++) {
//   if (newTab2[i] === motATrouver) {
//     console.log("C'est gagné");
//     break;
//   } else {
//     console.log(`Le mot ${motATrouver} n'est pas dans le tableau`);
//   }
// }




// const tab2 = [112, 318, 786, 834]

// let i= 0

// // boucle "tant que"
// while (i < tab2.length) {
//   console.log(tab2[i])
//   i++;
// }

// // affiche toute les valeurs
// for (let valeurs of tab2) {
//   console.log(valeurs)
// }
// // affiche tout les index
// for (let index in tab2) {
//   console.log(index)
// }
// // extrait la valeur et l'index
// tab2.map((val, i) => console.log(i, val))




// const tab3 = [
//   {
//     titre: '',
//     content: '',
//   },
//   {
//     titre: '',
//     content: '',
//   }
// ];

// tab3.forEach((val, i) => console.log(i, val))


const tab = [
  [1, 7], 
  ['test', 'retest'],
  [{ id: 1 }, { id: 2 }]
];

for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < tab[i].length; j++) {
    console.log(tab[i][j])
  }
}
