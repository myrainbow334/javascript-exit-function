const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const merge = [...new Set(a.concat(b))];
const isEmptyObject = obj => Object.keys(obj).length === 0;