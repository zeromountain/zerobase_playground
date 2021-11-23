const diffDays = require('./06_diffDays');
// console.log(+new Date('20201/01/01)) 1690

test('2021년 1월 1일과 2021년 12월 31일의 사이의 일수는 364일입니다.', () => {
  expect(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))).toBe(364);
});
