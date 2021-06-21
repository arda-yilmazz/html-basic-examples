document.getElementById('mode-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classList);
})

if (localStorage.getItem('mode') != '') {}