const getLastDateOfMonth = require('./03_getLastDateOfMonth');

test('2021년 1월의 마지막 날은 31일입니다.', () => {
  expect(getLastDateOfMonth(2021, 0)).toBe(31);
});
test('2021년 2월의 마지막 날은 28일입니다.', () => {
  expect(getLastDateOfMonth(2021, 1)).toBe(28);
});
