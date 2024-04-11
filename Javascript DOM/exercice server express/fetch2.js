
// fetch('http://localhost:3000/users')
// .then((resp) => {
//     console.log(resp)
//     return resp.ok ? resp.json() : console.log('erreur');
// })
// .then((data) => {
//         console.log(data)
//         const root = document.querySelector('#root');
//         const titre = document.querySelector('#nom')
//         titre.innerText = data.name
//         root.append(titre)
//     })


const eyeColor = { eyeColor: blue }

fetch('http://localhost:3000/users'), {
    method: 'POST',
    headers: {
        'Content-Type': 'appliction/json' 
    },
    body: JSON.stringify(eyeColor)
}
// .then((resp) => {
//     console.log(resp)
//     return resp.ok ? resp.json() : console.log('erreur');
// })
// .then((data) => {
//         console.log(data)
//         const root = document.querySelector('#root');
//         const titre = document.querySelector('#nom')
//         titre.innerText = data.name
//         root.append(titre)
//     })