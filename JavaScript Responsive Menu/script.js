var menu = document.getElementById('menu');

document.getElementById('button').addEventListener('click', () => {
    if (menu.style.height === '205px') {
        menu.style.height = '0';
        menu.style.visible = 'hidden';
        menu.style.opacity = '0';
        menu.style.transition = '250ms';
    } else {
        menu.style.height = '205px';
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
    }
});

