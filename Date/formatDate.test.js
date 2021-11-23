// yyyy-mm-dd 월과 일 모두 두 자리
// const formatDate = require('./01_formatDate');

/** JSDoc
 * Date 객체를 'yyyy-mm-dd' 형식의 문자열로 변환
 * @param {Date} date
 * @retunrs {string}
 */
const formatDate = (() => {
  const format = n => (n < 10 ? '0' + n : n + ''); // 클로저를 만듬으로써 함수 객체가 한번만 생성되도록 제어한다 💡
  return date =>
    `${date.getFullYear()}-${format(date.getMonth()) + 1}-${format(
      date.getDate(),
    )}`;
})();

/*
const formatDate = date => {
  // formating이 중복되기 때문에 함수를 생성
  const format = n => (n < 10 ? '0' + n : n + '');
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
  }-${date.getDate()}`;
};
*/

test(`'2021/07/24'의 형태로 Date 객체를 변환합니다.`, () => {
  expect(formatDate(new Date('2021/07/24'))).toBe('2021-07-24');
});
test(`'1900/1/4'의 형태로 Date 객체를 변환합니다.`, () => {
  expect(formatDate(new Date('1900/1/4'))).toBe('1900-01-04');
});
