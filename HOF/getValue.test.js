const getValues = require('./02_getValues');

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('todos 배열의 요소의 id 값을 배열로 반환합니다.', () => {
  expect(getValues(todos, 'id')).toStrictEqual([3, 2, 1]);
});
test('todos 배열의 요소의 content 값을 배열로 반환합니다.', () => {
  expect(getValues(todos, 'content')).toStrictEqual([
    'HTML',
    'CSS',
    'Javascript',
  ]);
});
test('todos 배열의 요소의 completed 값을 배열로 반환합니다.', () => {
  expect(getValues(todos, 'completed')).toStrictEqual([false, true, false]);
});
