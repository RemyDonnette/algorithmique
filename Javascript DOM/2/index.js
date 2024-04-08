let buttonCreateElement = document.getElementById('createElement');
let buttonAnimateSpan = document.getElementById('span-anime')

document.addEventListener('DOMContentLoaded', function () {
    const span = document.querySelector('#span-anime')
    span.classList.toggle('animate')
})

buttonCreateElement.addEventListener('click', function () {
    console.log('ok')
    const paragraphe = document.createElement('paragraphe');
    paragraphe.textContent = 'Lorem Ipsum';
    buttonAnimateSpan.after(paragraphe)
})

function anime() {
    const span = document.getElementById('span-anime');
    span.classList.toogle('animate');
}

buttonAnimateSpan.addEventListener('click', function () {
    anime ();
})