const getFirstDayOfMonth = require('./04_getFirstDayOfMonth');

test('2021년 1월 1일은 금요일입니다.', () => {
  expect(getFirstDayOfMonth(2021, 0)).toBe(5);
});
test('2021년 12월 1일은 수요일입니다.', () => {
  expect(getFirstDayOfMonth(2021, 11)).toBe(3);
});
