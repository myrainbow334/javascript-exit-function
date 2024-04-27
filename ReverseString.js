const minNumber = arr => Math.min(...arr);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);