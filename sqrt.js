const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const stringReverse = str => str.split("").reverse().join("");
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;