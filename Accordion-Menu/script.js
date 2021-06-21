let buttons = document.querySelectorAll('button');
let panels = document.querySelectorAll('.panel');

buttons.forEach(button => button.addEventListener('click', evt => {
    if (evt.currentTarget.classList.contains('active')) {
        buttons.forEach(button => button.classList.remove('active'));
    } else {
        buttons.forEach(button => button.classList.remove('active'));
        evt.currentTarget.classList.add('active'); 
    }
}));