const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const merge = [...new Set(a.concat(b))];