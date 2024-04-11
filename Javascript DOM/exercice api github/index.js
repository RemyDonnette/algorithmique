import { fetchData } from './fetch.js'

// const nomUtilisateur = document.querySelector('nomUtilisateur');
const root = document.querySelector('#root');

// console.log(nomUtilisateur);

// fetchData({url: ``})

fetchData({url: `https://api.github.com/users/RemyDonnette`})
    .then((data) => { data

        console.log(data);
        const createNomUtilisateur = document.createElement('h2');
        const createAvatar = document.createElement('img');
        const createDateDeCreation = document.createElement('p');

        createNomUtilisateur.innerText = data.name;
        createAvatar.src = data.avatar_url;
        createAvatar.alt = 'image de Ronflex';
        createDateDeCreation.innerText = data.created_at;

        root.append(createNomUtilisateur);
        root.append(createAvatar);
        root.append(createDateDeCreation);
    });