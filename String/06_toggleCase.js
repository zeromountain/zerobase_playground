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
// /([a-z]+)([A-Z]+)/g → 소문자 캡쳐, 대문자 캡쳐
// (_, lowerCase, upperCase) => lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()

module.exports = toggleCase;
