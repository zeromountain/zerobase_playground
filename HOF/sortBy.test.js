const sortBy = require('./03_sortBy');

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

test('todos 배열을 id 프로퍼티를 기준으로 정렬합니다.', () => {
  expect(sortBy(todos, 'id')).toStrictEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
  ]);
});
test('todos 배열을 content 프로퍼티를 기준으로 정렬합니다.', () => {
  expect(sortBy(todos, 'content')).toStrictEqual([
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
  ]);
});
test('todos 배열을 completed 프로퍼티를 기준으로 정렬합니다.', () => {
  expect(sortBy(todos, 'completed')).toStrictEqual([
    { id: 1, content: 'Javascript', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
  ]);
});
