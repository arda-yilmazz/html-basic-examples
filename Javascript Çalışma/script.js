//Kopyalama (copy)
let copyButton = document.getElementById('copy');
copyButton.addEventListener('click', () => {
    let input = document.getElementById('input');

    input.select();
    document.execCommand('copy');
});

//Şifre Text Değiştirme
function show() {

    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}