// Fonction
export function tabSortedByDate(tab) {
    return tab.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
    })
}

export function formatDateToText(dateTab) {

    const [year, month, day] = dateTab.split('/');
    const date = new Date(`${year}/${month}/${day}`);
    const joursSemaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const nomJourSemaine = joursSemaine[date.getDay()];
    const nomMois = mois[month - 1];

    return `${nomJourSemaine} ${day} ${nomMois} ${year}`;
}

export function createArticle(tab) {
    
    return tab.map((article, i) => {

        const titre = document.createElement('h2');
        const contenu = document.createElement('p');
        const image = document.createElement('img');
        const dateCreation = document.createElement('span');
        const dateMaj = document.createElement('span');
        const createdAt = formatDateToText(article.createdAt);
        const updatedAt = formatDateToText(article.updatedAt);
        
        titre.innerText = article.titre;
        titre.style.paddingTop = '3rem'
        contenu.innerText = article.content;
        image.src = article.picture;
        image.alt = article.alternativeText;
        image.style.maxWidth = '100%';
        dateCreation.innerText = `Article crée le : ${createdAt}` 
        dateMaj.innerText =  `Dernière mise à jour le : ${updatedAt}`
        
        root.append(titre, dateMaj, contenu, image, dateCreation );
    })
}


// const MONTHS = 1;
// const YEARS = 0;
// const DAYS = 2;
// const HOURS = 3;
// const MINUTES = 4;
// const SECONDES = 5;
// const MILLISECONDS = 6;

// function addInterval(date, interval) {
//   const parts = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
//   for (const [unit, value] of Object.entries(interval)) {
//     parts[unit] += value;
//   }
//   return new Date(...parts);
// }

// const today = new Date();

// const dateFuture = addInterval(today, {
//   [MONTHS]: 1,
//   [YEARS]: 1,
// });

// console.log(today);
// console.log(dateFuture);