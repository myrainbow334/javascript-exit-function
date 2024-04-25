const buildOutputPath = path.join(repositoryRootPath, 'out');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));