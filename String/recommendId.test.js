const recommendId = require('./02_recommendId');
/**
 * 1단계 → 소문자로 치환
 * 2단계 → !, @, #, * 문자 제거
 * 3단계 → '...', '..'를 '.'로 변경
 * 4단계 → 첫단어에 '.' 제거
 * 5단계 → 빈 문자열이면 a로
 * 6단계 → ID의 길이 15자
 * 7단계 → ID의 길이 2이하이면 마지막 문자 추가
 */

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
