// function ecrireUnMot () {
//     // instructions
//     console.log('un mot')
// }

// // appel de la fonction
// ecrireUnMot();


// // fonction pair ou impair
// function nombreEstPair(nombre) {
//     const isPair = nombre % 2 === 0 ? 'pair' : 'impair';
//     const reponse = `Le nombre ${nombre} est ${isPair}`;
//     console.log(reponse);
// } 

// // fonction flechée (identique mais sous forme de constante)
// const maFonction = (nombre) => {
//     const isPair = nombre % 2 === 0 ? 'pair' : 'impair';
//     const reponse = `Le nombre ${nombre} est ${isPair}`;
//     console.log(reponse);
// }

// maFonction (56)
// nombreEstPair(45)

// // foction recursive
// const addition = (a, b) => console.log(a + b);

// function test(nbre1, nbre2) {
//     if (nbre1 > 10) {
//         addition(nbre1, nbre2);
//     }
// }
// test(11,15);



// const test2 = () => console.log('Vous êtes majeur.')

// function isAdulte(age, cb) {
//     if (age >= 18) {
//         cb();
//     }
// }

// isAdulte(17, test2)

// function ageConduire(age, pays) {
//     age = prompt('Veuillez entrer votre age : ');
//     pays = prompt('Dans quel pays résidez vous ? (F/EU)');
//     const capable = (age >= 18 && pays === 'F')||(age >= 16 && pays === 'EU') ? 'pouvez' : 'ne pouvez pas';
//     if (pays === 'F') {
//         const capableF = `Vous ${capable} conduire en France`;
//         console.log(capableF);
//     } else if (pays === 'EU') {
//         const capableEU = `Vous ${capable} conduire aux Etats Unis`;
//         console.log(capableEU);
//     } else {
//         console.log('Les données entrées sont éronnées');
//     }
// }
// ageConduire()

