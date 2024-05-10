const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;