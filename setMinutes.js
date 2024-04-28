const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const uniqueArr = (arr) => [...new Set(arr)];
const arrayContains = (arr, element) => arr.includes(element);