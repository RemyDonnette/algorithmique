const personne1 = {
    age: 12,
    nom: 'test',
    mail: 'test@test',
    tel: '06 06 06 06 06',
    adresse: 'adresse'
}

function nomDeLaFonction({age, nom, mail, tel, adresse}) {
    console.log(age, nom, mail, tel, adresse);
}


console.log(nomDeLaFonction({ adresse: 'adresse1'}))