const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const toggleBool = () => (bool = !bool);