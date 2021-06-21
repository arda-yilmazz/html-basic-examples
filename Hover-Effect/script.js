let button = document.getElementById('button');
let button_close = document.getElementById('button_close');
let menu = document.getElementById('menu');

 document.getElementById('button').addEventListener( 'click',() => {
    menu.classList.toggle('none');
    button.style.display = 'none';
    button_close.style.display = 'block';
 });