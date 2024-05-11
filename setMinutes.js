const sumArray = arr => arr.reduce((total, current) => total + current, 0);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');