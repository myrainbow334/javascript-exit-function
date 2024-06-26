const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const merge = Object.assign({}, obj1, obj2);
const resultingPromises = urls.map((url) => makHttpRequest(url));