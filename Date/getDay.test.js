// const getDay = require('./02_getDay');

// dateString으로 주어졌을 때, 파싱할 수 있는 요소가 정해져 있다(?)
/**
 * @param {String} dateString
 * @returns {String}
 */
const getDay = (() => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return dateString => days[new Date(dateString).getDay()] + '요일';
})();

// const getDay = dateString =>
['일', '월', '화', '수', '목', '금', '토'][new Date(dateString).getDay()] +
  '요일'; // → 0 1 2 3 4 5 6 ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][] → 인덱스 자리에 new Date().getDay()를 사용한다.

test(`'2021-07-24' 해당 날짜의 요일은 토요일입니다.`, () => {
  expect(getDay('2021-07-24')).toBe('토요일');
});
test(`'2021-07-25' 해당 날짜의 요일은 일요일입니다.`, () => {
  expect(getDay('2021-07-25')).toBe('일요일');
});
test(`'2021-07-26' 해당 날짜의 요일은 월요일입니다.`, () => {
  expect(getDay('2021-07-26')).toBe('월요일');
});
test(`'2021-07-27' 해당 날짜의 요일은 화요일입니다.`, () => {
  expect(getDay('2021-07-27')).toBe('화요일');
});
test(`'2021-07-28' 해당 날짜의 요일은 수요일입니다.`, () => {
  expect(getDay('2021-07-28')).toBe('수요일');
});
