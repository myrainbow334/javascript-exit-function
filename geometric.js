console.log(typeof typeof 1);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isWeekday = (date) => date.getDay() % 6 !== 0;