const randomString = () => Math.random().toString(36).slice(2);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log("0 || 1 = "+(0 || 1));