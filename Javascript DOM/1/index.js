// Génère une variable qui récupère une balise selon son id
let root = document.getElementById('root');

// Génère une variable qui crée une balise
let titre = document.createElement('h1');
let bouton = document.createElement('button');
let boutonRemove = document.createElement('button');

// Injecte du texte dans une balise
titre.textContent = 'Javascript DOM';
bouton.textContent = 'Bleu';
boutonRemove.textContent = 'noir';

// Modifie les bropriétés CSS d'une variable
titre.style.width = 'fit-content';
titre.style.padding = '4px';

// Rajoute la balise titre dans la div:root
root.appendChild(titre);
root.append(bouton);
root.append(boutonRemove);

// Crée une écoute sur la variable bouton
bouton.addEventListener('click', function() {
    // Ajoute une classe à la variable de type interrupteur
    titre.classList.toggle('colorh1');
})
boutonRemove.addEventListener('click', function() {
    titre.classList.remove('colorh1');
})
titre.addEventListener('mouseup', function () {
    titre.style.border = '2px solid black';
    titre.style.borderRadius = '8px';
})

console.log(document.body);