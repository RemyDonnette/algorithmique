// // Horloge

// let heures = document.querySelector('#aiguille-heures');
// let minutes = document.querySelector('#aiguille-minutes');
// let secondes = document.querySelector('#aiguille-secondes');
// const heuresD = document.querySelector('#heuresDigit');
// const minutesD = document.querySelector('#minutesDigit');
// const secondesD = document.querySelector('#secondesDigit');
// let degHeures = -90;
// let degMinutes = -90;
// let degSecondes = -90;

// setInterval(() => {
//     const date = new Date();
//     const heu = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     heures.style.transform = `rotate(${heu * 30 - 90}deg)`;
//     minutes.style.transform = `rotate(${min * 6 - 90}deg)`;
//     secondes.style.transform = `rotate(${sec * 6 - 90}deg)`;
//     heuresD.textContent = `${date.getHours().toString().padStart(2, 0)}:`;
//     minutesD.textContent = `${date.getMinutes().toString().padStart(2, 0)}:`;
//     secondesD.textContent = date.getSeconds().toString().padStart(2, 0);
// }, 1000);

    // // Obsolète
    // setInterval(() => {
    //     secondes.style.transform = `rotate(${degSecondes}deg)`;
    //     degSecondes += 6 ;
    //     minutes.style.transform = `rotate(${degMinutes}deg)`;
    //     degMinutes += (6/60) ;
    //     heures.style.transform = `rotate(${degHeures}deg)`;
    //     degHeures += (30/3600) ;
    // }, 1000);

// const form = document.querySelector('#form');
// console.log(form);

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // Premet de recuperer l'extension d'un fichier uploadé
//     console.log(e.target[0].files[0].name.split('.').pop());
// })

const imput = document.querySelector('#test');

imput.addEventListener("input", (e) => {
    console.log(e.target.value)
})