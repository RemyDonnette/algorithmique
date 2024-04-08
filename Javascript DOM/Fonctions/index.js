import { tabSortedByDate } from './array.js'
// import { * as array } from './array.js'

const root = document.querySelector('#root');

const articles = [
    {
        id: 1,
        titre: 'Titre article 1',
        content: 'article 1',
        picture: './images/image1.webp',
        alternativeText: 'image d\'une fleur',
        createdAt: '2016/07/12', // année/mois/jour
        updatedAt: '2018/04/20',
        isActive: true
    },
    {
        id: 2,
        titre: 'Titre article 2',
        content: 'article 2',
        picture: './images/image2.webp',
        alternativeText: 'image d\'une fleur',
        createdAt: '2018/04/20',
        updatedAt: '2022/07/22',
        isActive: false
    },
    {
        id: 3,
        titre: 'Titre article 3',
        content: 'article 3',
        picture: './images/image3.webp',
        alternativeText: 'image d\'une fleur',
        createdAt: '2019/04/24',
        updatedAt: '2019/12/08',
        isActive: true
    }
    ];

// function createArticle(title, content, img, date) {
    
//     const titre = document.createElement(title);
//     const paragraphe = document.createElement(content);
//     const image = document.createElement(img);
//     const dates = document.createElement(date);
    
//     titre.innerText = articles.titre;
//     paragraphe.innerText = articles.content;
//     image.setAttribute('src', articles.picture);
//     image.setAttribute('alt', articles.alternativeText);
//     image.style.maxWidth = '100%';
//     dates.innerText = `Crée le : ${articles.createdAt} \n Mis à jour le : ${articles.updatedAt}`
    
//     root.append(titre, paragraphe, image, dates);
// }

// createArticle()

const articlesSorted = tabSortedByDate(articles);

articlesSorted.map((articles, i) => {

    const titre = document.createElement('h2');
    const paragraphe = document.createElement('p');
    const image = document.createElement('img');
    const dates = document.createElement('p');

    const newDate = new Date(articles.createdAt);
    const jour = newDate.getDate();
    const mois = newDate.getDate() + 1;
    const annee = newDate.getDate();
    const dateEntiere = `${jour}/${mois}/${annee}`



    titre.innerText = articles.titre;
    paragraphe.innerText = articles.content;
    image.setAttribute('src', articles.picture);
    image.setAttribute('alt', articles.alternativeText);
    image.style.maxWidth = '100%';
    dates.innerText = `Crée le : ${articles.createdAt} \n Mis à jour le : ${articles.updatedAt}`

    root.append(titre);
    root.append(paragraphe);
    root.append(image);
    root.append(dates);
})



// const dateArticle = document.querySelector('#dateArticle')

// dateInput.addEventListener('change' (e) => {
//     console.log(e.target.value);
// })
