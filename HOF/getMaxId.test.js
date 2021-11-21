const getMaxId = require('./09_getMaxId');

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('todos 배열의 todo 요소의 가장 큰 id 값을 반환합니다.', () => {
  expect(getMaxId(todos)).toBe(3);
});
test('빈 배열이 입력값으로 들어온 경우 0을 반환합니다.', () => {
  expect(getMaxId([])).toBe(0);
});
