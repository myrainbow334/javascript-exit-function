const isArray = (arr) => Array.isArray(arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const sumArray = arr => arr.reduce((total, current) => total + current, 0);