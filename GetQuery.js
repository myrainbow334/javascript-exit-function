const stringReverse = str => str.split("").reverse().join("");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(false === '0');