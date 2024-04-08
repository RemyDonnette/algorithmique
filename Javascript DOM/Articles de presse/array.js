// Fonction
export function tabSortedByDate(tab) {
    const articlesSortedByDate = tab.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
    })
    return articlesSortedByDate
}

export function formatDateToText(dateString) {

    const [year, month, day] = dateString.split('/');
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