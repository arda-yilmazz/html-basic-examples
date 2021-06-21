var colorInput = document.getElementById('color-input');

document.body.style.background = '#0081BC';
colorInput.addEventListener('keyup', function (e) {
   document.body.style.background = e.target.value;
});