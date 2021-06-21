let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', evt => {
    buttons.forEach(button => button.classList.remove('active'));
    evt.currentTarget.classList.add('active');
}));