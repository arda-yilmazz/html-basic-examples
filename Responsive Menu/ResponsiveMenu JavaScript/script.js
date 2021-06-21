var menu = document.getElementById('menu');
var responsive = document.getElementById('responsive'); 
var btns = document.getElementsByTagName('a');


responsive.addEventListener('click', () => {
    menu.classList.toggle('none');
});


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var active = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace = (' active', '');
        this.className += ' active'; 
    });
}