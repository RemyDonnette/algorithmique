function saisie() {
    let mot = prompt('Veuillez entrer un mot : ')
    const motMin = mot.toLowerCase();
    while (/[\d]/.test(motMin)) {
        mot = prompt('Veuillez entrer un mot sans chiffres : ')
    }
    palindrome(mot);
}

const palindrome = (motMin) => {
    const tabSplitReverse = motMin.split('').reverse().join('');
        console.log(motMin);
        console.log(tabSplitReverse);
    const compare = (motMin === tabSplitReverse) ? 'Gagné' : 'Perdu';
        console.log(compare)
}

saisie();
