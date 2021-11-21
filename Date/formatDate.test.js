const formatDate = require('./01_formatDate');

test(`'2021/07/24'의 형태로 Date 객체를 변환합니다.`, () => {
  expect(formatDate(new Date('2021/07/24'))).toBe('2021-07-24');
});
test(`'1900/1/4'의 형태로 Date 객체를 변환합니다.`, () => {
  expect(formatDate(new Date('1900/1/4'))).toBe('1900-01-04');
});
