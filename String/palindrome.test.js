const isPalindrome = require('./01_palindrome');

test('유효한 팰린드롬 문자인가?', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});
test('유효한 팰린드롬 문자인가?', () => {
  expect(isPalindrome('race a car')).toBe(false);
});
test('유효한 팰린드롬 문자인가?', () => {
  expect(isPalindrome('found7, time: study; Yduts; emit, 7Dnuof')).toBe(true);
});
