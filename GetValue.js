const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isEmptyArray = arr => !arr.length;
var arr2 = arr1.reverse();