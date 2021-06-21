let range = document.getElementById('range');
let paragraph = document.querySelectorAll('p');

range.addEventListener('input', () => {
    paragraph.forEach(p => p.style.fontSize = range.value + 'px');
    document.querySelector('h1 span').innerHTML = range.value;
    localStorage.setItem('value', range.value);
})

const localstorage = () => {
    range.value = localStorage.getItem('value');
    paragraph.forEach(p => p.style.fontSize = localStorage.getItem('value') + 'px');
    document.querySelector('h1 span').innerHTML = range.value;
    console.log(localStorage.getItem('value'));
}
localstorage();