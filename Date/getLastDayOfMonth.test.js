const getLastDayOfMonth = require('./05_getLastDayOfMonth');

test('2021년 1월 말일은 일요일 입니다.', () => {
  expect(getLastDayOfMonth(2021, 0)).toBe(0);
});
test('2021년 12월 말일은 금요일 입니다.', () => {
  expect(getLastDayOfMonth(2021, 11)).toBe(5);
});
