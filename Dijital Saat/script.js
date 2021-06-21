function clock() {
    var saat=document.getElementById('saat');
    var dakika=document.getElementById('dakika');
    var saniye=document.getElementById('saniye');

    var s = new Date().getHours();
    var d = new Date().getMinutes();
    var ss = new Date().getSeconds();

    saat.innerHTML=s;
    dakika.innerHTML=d;
    saniye.innerHTML=ss;
}

var interval=setInterval(clock, 100);