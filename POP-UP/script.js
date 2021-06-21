var exit = document.getElementById('close-btn');
var open = document.getElementById('open-btn');
var popup = document.getElementById('popup');

open.addEventListener('click', () => {
    popup.style.top = '50%';
    popup.style.transition = '250ms';
    document.body.style.backgroundColor = '#333';
    open.style.backgroundColor = '#333';
});

exit.addEventListener('click', () => {
    popup.style.top = '-50%';
    document.body.style.backgroundColor = '#fff';
    open.style.backgroundColor = '#fff'
});