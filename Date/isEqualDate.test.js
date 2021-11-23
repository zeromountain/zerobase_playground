// const isEqualDate = require('./07_isEqualDate');
// format Date와 같이 하나씩 비교
// 년도, 월, 날짜 각각 비교
const isEqualDate = (date1, date2) =>
  Math.abs(+date1 - +date2) < 24 * 60 * 60 * 1000;

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
