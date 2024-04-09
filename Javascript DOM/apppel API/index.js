import { fetchData, drawCircularGauge } from './fetch.js'

const API_KEY = 'de462d1e145d44e084148f017bf5976d';
const root = document.querySelector("#root")
const main = document.createElement('main')
root.append(main)

fetchData({...{url: `https://api.rawg.io/api/games?key=${API_KEY}`}})
    .then((data) => { data.results
        .filter((game) => game.rating > 3.4)
        .map((game) => { 
            
            const card = document.createElement('div');
            const header = document.createElement('div')
            const metacritic = document.createElement('div');
            const metacriticGauge = document.createElement('canvas');
            const titre = document.createElement('h2');
            const image = document.createElement('img');
            const content = document.createElement('div');
            const contentPlatform = document.createElement('ul');
            
            main.append(card);
            card.append(header);
            header.append(titre);
            header.append(metacritic);
            metacritic.append(metacriticGauge);
            card.append(image);
            card.append(content);
            content.append(contentPlatform);
            
            card.classList.toggle('card');
            header.classList.toggle('header');
            image.classList.toggle('imageCard');
            content.classList.toggle('content');
            
            metacriticGauge.id = 'gaugeCanvas';
            drawCircularGauge(game.metacritic);
            
            image.src = game.background_image;
            titre.innerText = game.name;
            
            game.platforms.map((platform) => {
                const li = document.createElement('li');
                li.innerText = platform.platform.name;
                contentPlatform.append(li);
                contentPlatform.style.textAlign = 'left';
            });
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