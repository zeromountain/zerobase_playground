const countUpperCase = require('./04_countUpperCase');

test(`'KoreaTimeGood'의 문자에 대문자가 몇 개?!`, () => {
  expect(countUpperCase('KoreaTimeGood')).toBe(3);
});
test(`'APplE'의 문자에 대문자가 몇 개?!`, () => {
  expect(countUpperCase('APplE')).toBe(3);
});
test(`'AirPLAnE'의 문자에 대문자가 몇 개?!`, () => {
  expect(countUpperCase('AirPLAnE')).toBe(5);
});
test(`'AbCdEfGhIjKlMnOpQrStUvWxYz'의 문자에 대문자가 몇 개?!`, () => {
  expect(countUpperCase('AbCdEfGhIjKlMnOpQrStUvWxYz')).toBe(13);
});
test(`'How Are You?'의 문자에 대문자가 몇 개?!`, () => {
  expect(countUpperCase('How Are You?')).toBe(3);
});
