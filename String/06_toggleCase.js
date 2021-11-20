const toggleCase = str =>
  str
    .match(/[a-zA-z]/g)
    .map(word => {
      return word === word.toUpperCase()
        ? word.toLowerCase()
        : word.toUpperCase();
    })
    .join('');

module.exports = toggleCase;
