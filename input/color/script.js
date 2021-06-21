let colors = document.getElementById('color');
let input = document.querySelector('.box input');

colors.addEventListener('input', event =>  {
    let box = document.querySelector(".box");
    box.style.backgroundColor = event.target.value;
    input.value = event.target.value;
});

function notification(msg) {
    let old_div = document.querySelector('.alert');

    if (old_div) {
        old_div.parentNode.removeChild(old_div);
    }

    let div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = msg;
    document.body.appendChild(div);

    setTimeout(() => div.classList.add('active'), 1);
    setTimeout(() => div.classList.remove('active'), 1000);
}

function randomColor() {
    let str = 'abcdef0123456789';
    let color = '#';

    for (let i = 0; i <=5; i++) {
        color += str[Math.floor(Math.random() * str.length)];
    }
    let box = document.querySelector(".box");

    box.style.backgroundColor = color;
    colors.value = color;
    input.value = color;
}

function copy() {
    input.select();
    document.execCommand('copy');
    notification('Successfully copied');
}