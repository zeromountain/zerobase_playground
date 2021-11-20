const count = require('./05_count');

test(`'COMPUTERPROGRAMMING' 문자에서 'R'은 몇 개인가?!`, () => {
  expect(count('COMPUTERPROGRAMMING', 'R')).toBe(3);
});
test(`'COMPUTERSCIENCE' 문자에서 'C'는 몇 개인가?!`, () => {
  expect(count('COMPUTERSCIENCE', 'C')).toBe(3);
});
test(`'FIFAWORLDCUP' 문자에서 'F'는 몇 개인가?!`, () => {
  expect(count('FIFAWORLDCUP', 'F')).toBe(2);
});
test(`'KEVINDEBRUYNE' 문자에서 'N'은 몇 개인가?!`, () => {
  expect(count('KEVINDEBRUYNE', 'N')).toBe(2);
});
test(`'AAAAAADDDVVVBBBGGGGRTREEWAWERTTAADGDGDAA' 문자에서 'A'는 몇 개인가?!`, () => {
  expect(count('AAAAAADDDVVVBBBGGGGRTREEWAWERTTAADGDGDAA', 'A')).toBe(11);
});
