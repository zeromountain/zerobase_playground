const isEqualDate = require('./07_isEqualDate');

test('2021년 7월 24일과 2021년 7월 24일은 같은 년도 같은 월 같은 날짜입니다.', () => {
  expect(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))).toBe(
    true,
  );
});
test('2021년 7월 24일과 2021년 7월 2일은 같은 년도 같은 월 같은 날짜가 아닙니다.', () => {
  expect(isEqualDate(new Date('2021/07/24'), new Date('2021/07/2'))).toBe(
    false,
  );
});
