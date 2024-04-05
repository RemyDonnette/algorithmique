function saisie() {
    let mot = prompt('Veuillez entrer un mot : ');
    while (!/^[a-zA-z]+$/.test(mot)) {
        mot = prompt('Veuillez entrer un mot sans chiffres ni caractères speciaux : ');
    }
    palindrome(mot);
}
const palindrome = (mot) => {
    const motMin = mot.toLowerCase();
    const motReverse = motMin.split('').reverse().join('');
    const compare = (motMin === motReverse) ? 'est' : 'n\'est pas';
    const reponse = `Le mot ${mot} ${compare} un palindrome`;
    console.log(reponse);
    newGame();
}
function newGame () {
    let newGameStart = prompt('Voulez vous rejouer ? (O/N) : ');
    while (!((/^[O]/||/^[N]/).test(newGameStart))) {
        newGameStart = prompt('Veuillez entrer O ou N : ');
    }
    const restart = (newGameStart === "O") ? saisie() : 'Jeu terminé';
    console.log(restart)
}
saisie();