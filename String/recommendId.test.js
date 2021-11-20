const recommendId = require('./02_recommendId');

test('...!@BaT#*..y.abcdefghijklm 문자가 7단계 처리 과정을 통과하면?', () => {
  expect(recommendId('...!@BaT#*..y.abcdefghijklm')).toBe('bat.y.abcdefghi');
});
test('z-+.^. 문자가 7단계 처리 과정을 통과하면?', () => {
  expect(recommendId('z-+.^.')).toBe('z--');
});
test('=.= 문자가 7단계 처리 과정을 통과하면?', () => {
  expect(recommendId('=.=')).toBe('aaa');
});
test('123_.def 문자가 7단계 처리 과정을 통과하면?', () => {
  expect(recommendId('123_.def')).toBe('123_.def');
});
test('abcdefghijklmn.p 문자가 7단계 처리 과정을 통과하면?', () => {
  expect(recommendId('abcdefghijklmn.p')).toBe('abcdefghijklmn');
});
