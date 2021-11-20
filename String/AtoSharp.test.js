const replaceAtoSharp = require('./03_AtoSharp');

test('BANANA의 A를 #으로 바꾸면?', () => {
  expect(replaceAtoSharp('BANANA')).toBe('B#N#N#');
});
test('AABBCC의 A를 #으로 바꾸면?', () => {
  expect(replaceAtoSharp('AABBCC')).toBe('##BBCC');
});
test('CANTATA의 A를 #으로 바꾸면?', () => {
  expect(replaceAtoSharp('CANTATA')).toBe('C#NT#T#');
});
test('APPLE의 A를 #으로 바꾸면?', () => {
  expect(replaceAtoSharp('APPLE')).toBe('#PPLE');
});
