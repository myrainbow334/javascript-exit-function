const isEven = (num) => num % 2 === 0;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const electronDownloadPath = path.join(repositoryRootPath, 'electron');