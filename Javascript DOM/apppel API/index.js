import { fetchData } from './fetch.js'

const root = document.querySelector("#root")
const API_KEY = 
'de462d1e145d44e084148f017bf5976d';
const main = document.createElement('main')
root.append(main)

// // Traitement en amont
// const post =  [
//     {
//         titre: 'test',
//         content: 'contenu',
//     },
//     {
//         titre: 'test2',
//         content: 'contenu2',
//     }
// ]


fetchData({...{url: `https://api.rawg.io/api/games?key=${API_KEY}`}})
    .then((data) => {
        data.results
            .filter((game) => game.rating > 4.4)
            .map((game) => {

                console.log(game)
                const card = document.createElement('div');
                const titreCard = document.createElement('h2');
                const imageCard = document.createElement('img');
                const content = document.createElement('ul');

                main.append(card);
                card.append(titreCard);
                card.append(imageCard);
                card.append(content);

                // game.plateforms.map((platform) => {
                //     const li = document.createElement('li');
                //     li.innerText = platform.platform.name;
                //     content.append(li);
                // });

                card.classList.toggle('card');
                imageCard.classList.toggle('imageCard');
                imageCard.src = game.background_image;
                imageCard.style.width = '500px';
                titreCard.innerText = game.name;
            });
        });





// fetchData({...{url: 'https://jsonplaceholder.typicode.com/posts', query: '?_limit=5'}})
//     .then((data) => console.log(data))

// fetchData({...{url: 'https://jsonplaceholder.typicode.com/photos'}})
// .then((data) => console.log(data))




// const users = fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', 
// {
//     // method: 'POST',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
//     // body: JSON.stringify(post), 
// });


// users
//     // transforme la réponse en json lisible
//     .then((r) => r.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))
//     .finally(() => console.log('ok'))


// function awaiting(timer) {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('ok'));
//         }, timer);
//     })
// }

// const awaiting2 = async (timer) => {
//     setTimeout(() => {
//         console.log(timer);
//     }, timer);
// }


// const attendre = await awaiting2(4000)

// console.log(attendre)
// awaiting(2000);