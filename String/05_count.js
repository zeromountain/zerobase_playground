const count = (str1, str2) => str1.match(new RegExp(`${str2}`, 'g')).length;

module.exports = count;
