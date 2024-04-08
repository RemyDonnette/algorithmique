let openNav = document.getElementById('navulM');
let burgerB = document.getElementById('burger');
let test1 = document.getElementById('test1')

console.log(burgerB);
console.log(navulM);
console.log(test1)

burgerB.addEventListener('click', function () {
    openNav.classList.toggle('openNav');
})

test1.addEventListener('cilck', function () {
    console.log('ok')
    const paragraphe = document.createElement('p');
    paragraphe.textContent = 'Loremi Ipsum'
    test1.after(paragraphe)
})

