const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var regexp  = new RegExp('{{([^}]+)}}', 'g');