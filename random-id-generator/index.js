const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
let first = key[Math.floor(Math.random() * key.length)]

function randomId() {
    for (let i = 0; i <= 25; i++) {
        first += key[Math.floor(Math.random() * key.length)]
    }
    console.log(first);
    return first
}

randomId();