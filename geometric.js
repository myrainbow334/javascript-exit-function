const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];