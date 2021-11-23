// const toggleCase = str =>
//   str
//     .match(/[a-zA-z]/g)
//     .map(word => {
//       return word === word.toUpperCase()
//         ? word.toLowerCase()
//         : word.toUpperCase();
//     })
//     .join('');
const toggleCase = str =>
  str.replace(/[a-zA-Z]/g, word =>
    word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase(),
  );

module.exports = toggleCase;
